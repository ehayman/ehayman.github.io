import _ from 'lodash';
import algoliasearch from 'algoliasearch';

class SearchStore {
    
    static get $inject() {
        return ['$rootScope', 'APP_ID', 'API_KEY'];
    }
    
    constructor($rootScope, APP_ID, API_KEY) {
        this._$rootScope = $rootScope;
        this._APP_ID = APP_ID;
        this._API_KEY = API_KEY;

        this._client = algoliasearch(this._APP_ID, this._API_KEY);
        this._index = this._client.initIndex('bestbuy');
        
        this.query = "";
        this._results = [];
        this._currentHits = 0;
        this._currentPage = 0;
    }
    
    get results() {
        return this._results;
    }
    
    get needsAdditionalResults() {
        return this._currentHits > 0 && this._results.length < 10 && this.query.length < 2 && this._currentPage < 10;
    }

    get createResults() {
        return _.flow([
            this._createRelevantResults,
            this._removeDuplicates,
            this._setResults,
            this._handlePagination
        ]);
    }
    
    triggerQuerySearch() {
        this._results = [];
        this._currentPage = 0;
        this._updateQuery();
    }
    
     _updateQuery() {
        this._index.search(this.query, {
            page: this._currentPage
        }).then(results => this._handleFetchSuccess(results)).catch(err => this._handleFetchError(err));
    }
    
    _handleFetchSuccess(results) {
        this._currentHits = results.nbHits;
        this.createResults(results);
    }

    _handleFetchError(err) {
        console.log(err);
    }   
    
    /**
    ** createRelevantResults :: array -> array
    ** Returns array of results containing relevant (either brand or type) value and highest level category
    */   
    _createRelevantResults(results) {
        return results.hits.map(item => Object.assign({}, {relevantValue: this._getResultsValues(item._highlightResult)}, {category: item.hierarchicalCategories.lvl0}));
    }
    
    /**
    ** getResultsValues :: object -> string
    ** Returns relevant value (either brand or type) based on matched words
    */      
    _getResultsValues(item) {
        return item.type.matchedWords.length > 0 ? item.type.value : item.brand.value;
    }
    
    /**
    ** removeDuplicates :: array -> array
    ** Returns array of results with duplicates filtered out
    */   
    _removeDuplicates(relevantResults) {
        return _.uniqWith(relevantResults, _.isEqual);
    }
    
    /**
    ** setResults :: array -> array
    ** Returns array of results concatenated to any prior results from the current query
    */   
     _setResults(relevantResults) {
        return this._results.concat(relevantResults);
    }   
    
    _handlePagination(relevantResults) {
        this._results = this._removeDuplicates(relevantResults);
        if (this.needsAdditionalResults) {
            this._currentPage++;
            this._updateQuery();
        }
        else {
            this._$rootScope.$evalAsync();
        }
    }
    
}
export default SearchStore;