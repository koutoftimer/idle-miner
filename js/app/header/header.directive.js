(function() {
    'use strict';

    angular
        .module('app')
        .directive('mnrHeader', HeaderDirective);

    HeaderDirective.$inject = [];

    function HeaderDirective(resources) {
        var directive = {
            bindToController: true,
            controller: 'HeaderController',
            controllerAs: 'header',
            restrict: 'EA',
            templateUrl: 'js/app/header/header.template.html'
        };

        return directive;
    }
})();
