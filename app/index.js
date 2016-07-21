import angular from 'angular';

import SearchStore from './search-store.js';
import SearchController, { searchDirective } from './search-component.js';

export default angular
.module('Algolia.DemoSearch', [])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }])
    .constant('APP_ID', 'QEZLJEBUWB')
    .constant('API_KEY', '336f0638ed3e45b8ac22b4a0df3417f4')
    .service('searchStore', SearchStore)
    .controller('SearchController', SearchController)
    .directive('searchDirective', searchDirective);

angular.element(document).ready(function () {
    angular.bootstrap(document.getElementById("AlgoliaSearch"), ['Algolia.DemoSearch']);
})