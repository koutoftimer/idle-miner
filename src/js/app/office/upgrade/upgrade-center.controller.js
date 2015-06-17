(function() {
    'use strict';

    angular
        .module('app.office')
        .controller('UpgradeCenterController', UpgradeCenterController);

    UpgradeCenterController.$inject = ['resources', 'levels'];

    function UpgradeCenterController(resources, levels) {
        var upgradeCenter = this;
        
        upgradeCenter.addLevel = addLevel;
        upgradeCenter.canAddLevel = canAddLevel;
        upgradeCenter.levels = levels;

        function addLevel() {
            resources.cash -= levels.getNewLevelCost();
            levels.addLevel();
        }

        function canAddLevel() {
            return levels.getNewLevelCost() <= resources.cash;
        }
    }
})();
