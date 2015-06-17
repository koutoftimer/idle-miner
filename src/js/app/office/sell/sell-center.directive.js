(function() {
    'use strict';

    angular
        .module('app.office')
        .directive('mnrSellCenter', SellCenterDirective);

    SellCenterDirective.$inject = [];

    function SellCenterDirective(controller) {
        var directive = {
            bindToController: true,
            controller: 'SellCenterController',
            controllerAs: 'sellCenter',
            restrict: 'EA',
            templateUrl: 'js/app/office/sell/sell-center.directive.html'
        };

        return directive;
    }
})();

