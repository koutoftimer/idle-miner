(function() {
    'use strict';

    angular
        .module('app.office')
        .directive('mnrUpgradeCenter', UpgradeCenterDirective);

    UpgradeCenterDirective.$inject = [];

    function UpgradeCenterDirective(controller) {
        var directive = {
            bindToController: true,
            controller: 'UpgradeCenterController',
            controllerAs: 'upgradeCenter',
            restrict: 'EA',
            templateUrl: 'js/app/office/upgrade/upgrade-center.directive.html'
        };

        return directive;
    }
})();
