(function() {
    'use strict';

    angular
        .module('app.components')
        .directive('mnrHeader', HeaderDirective);

    HeaderDirective.$inject = [];

    function HeaderDirective(resources) {
        var directive = {
            bindToController: true,
            controller: 'HeaderController',
            controllerAs: 'header',
            restrict: 'EA',
            templateUrl: 'js/app/components/header/header.directive.html'
        };

        return directive;
    }
})();
