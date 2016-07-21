export function searchDirective() {
    return {
        restrict: 'E', 
        controller: 'SearchController', 
        controllerAs: 'searchController', 
        bindToController: true, 
        templateUrl: '/app/search-component.html'
    };
}

class SearchController {
    
    static get $inject() {
        return ['searchStore', '$sce'];
    }
    
    constructor(searchStore, $sce) {
        this._searchStore = searchStore;
        this._$sce = $sce;
    }
    
    get results() {
        return this._searchStore.results;
    }
    
    get itemNames() {
        return this._searchStore.itemNames;
    }
    
    get query() {
        return this._searchStore.query;
    }
    
    set query(value) {
        this._searchStore.query = value;
    }
    
    renderHtml(text) {
        return this._$sce.trustAsHtml(text);
    }
    
    searchQuery() {
        this._searchStore.triggerQuerySearch();
    }
}

export default SearchController;