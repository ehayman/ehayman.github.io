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
        this._itemNames = [];
    }
    
    get itemNames() {
        return this._itemNames;
    }
    
    get results() {
        return this._results;
    }

    get createResults() {
        return _.flow([
            this._createRelevantResults,
            this._removeEmpties,
            this._removeDuplicates,
            this._setResults
        ]);
    }
    
    get createNames() {
        return _.flow([
            this._createRelevantResults,
            this._removeEmpties,
            this._removeDuplicates,
            this._setItemNames
        ]);
    }
    
    triggerQuerySearch() {
        this._results = [];
        this._itemNames = [];
        this._updateQuery();
    }
    
     _updateQuery(valueType) {
        this._index.search(this.query, {
            hitsPerPage: 40
        }).then((results) => this._handleFetchSuccess(results)).catch(err => this._handleFetchError(err));
    }
    
    _handleFetchSuccess(results, valueType) {
        this.createResults(results, this._getResultsValues);
        this.createNames(results, this._getNamesValues);
    }

    _handleFetchError(err) {
        console.log(err);
    }   
    
    /**
    ** createRelevantResults :: array -> array
    ** Returns array of results containing relevant (either brand or type) value and highest level category
    */   
    _createRelevantResults(results, getValues) {
        return results.hits.map(item => Object.assign({}, {relevantValue: getValues(item._highlightResult)}, {category: item.hierarchicalCategories.lvl0}));
    }
    
    /**
    ** getResultsValues :: object -> string
    ** Returns relevant value (either brand or type) based on matched words
    */      
    _getResultsValues(item) {
        return item.type.matchedWords.length > 0 ? item.type.value : item.brand.value;
    }
    
    /**
    ** getNamesValues :: object -> string
    ** Returns relevant name value based on matched words
    */      
    _getNamesValues(item) {
        return item.name.matchedWords.length > 0 ? item.name.value : "";
    }
    
    /**
    ** removeEmpties :: array -> array
    ** Returns array of results with empty values filtered out
    */   
    _removeEmpties(relevantResults) {
        return relevantResults.filter(item => item.relevantValue != "");
    } 
    
    /**
    ** removeDuplicates :: array -> array
    ** Returns array of results with duplicates filtered out
    */   
    _removeDuplicates(relevantResults) {
        return _.uniqWith(relevantResults, _.isEqual);
    }
  
     _setResults(relevantResults) {
        this._results = relevantResults;
        this._$rootScope.$evalAsync();
    }   
    
     _setItemNames(relevantNames) {
        this._itemNames = relevantNames;
        this._$rootScope.$evalAsync();
    }  
    
}
export default SearchStore;