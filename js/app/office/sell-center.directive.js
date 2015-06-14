(function() {
    'use strict';

    angular
        .module('app')
        .directive('mnrSellCenter', SellCenterDirective);

    SellCenterDirective.$inject = [];

    function SellCenterDirective(controller) {
        var directive = {
            bindToController: true,
            controller: 'SellCenterController',
            controllerAs: 'sellCenter',
            restrict: 'EA',
            templateUrl: 'js/app/office/sell-center.template.html'
        };

        return directive;
    }
})();

