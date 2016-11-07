import angular from 'angular';

import SearchStore from './search-store.js';
import SearchController, { searchDirective } from './search-component.js';

export default angular
.module('Algolia.DemoSearch', [])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }])
    .constant('APP_ID', 'Q71HM8430Y')
    .constant('API_KEY', '7f42b7cbd41474bf777414c24302d4a4')
    .service('searchStore', SearchStore)
    .controller('SearchController', SearchController)
    .directive('searchDirective', searchDirective);

angular.element(document).ready(function () {
    angular.bootstrap(document.getElementById("AlgoliaSearch"), ['Algolia.DemoSearch']);
})