(function() {
    'use strict';

    angular
        .module('app')
        .directive('mnrUpgradeCenter', UpgradeCenterDirective);

    UpgradeCenterDirective.$inject = [];

    function UpgradeCenterDirective(controller) {
        var directive = {
            bindToController: true,
            controller: 'UpgradeCenterController',
            controllerAs: 'upgradeCenter',
            restrict: 'EA',
            templateUrl: 'js/app/office/upgrade-center.template.html'
        };

        return directive;
    }
})();
