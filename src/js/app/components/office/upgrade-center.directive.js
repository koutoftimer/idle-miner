(function() {
    'use strict';

    angular
        .module('app.components')
        .directive('mnrUpgradeCenter', UpgradeCenterDirective);

    UpgradeCenterDirective.$inject = [];

    function UpgradeCenterDirective(controller) {
        var directive = {
            bindToController: true,
            controller: 'UpgradeCenterController',
            controllerAs: 'upgradeCenter',
            restrict: 'EA',
            templateUrl: 'js/app/components/office/upgrade-center.directive.html'
        };

        return directive;
    }
})();
