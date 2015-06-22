(function() {
    'use strict';

    angular
        .module('app.resources')
        .directive('mnrInlineResources', InlineResourcesDirective);

    InlineResourcesDirective.$inject = [];

    function InlineResourcesDirective() {
        var directive = {
            bindToController: true,
            controller: 'InlineResourcesController',
            controllerAs: 'inline',
            restrict: 'EA',
            templateUrl: 'js/app/resources/inline.directive.html'
        };

        return directive;
    }
})();
