(function() {
    'use strict';

    angular
        .module('app')
        .controller('EmployeeCenterController', EmployeeCenterController);

    EmployeeCenterController.$inject = ['resources', 'levels'];

    function EmployeeCenterController(resources, levels) {
        var employeeCenter = this;
        
        employeeCenter.canHire = canHire;
        employeeCenter.hireWorker = hireWorker;
        employeeCenter.levels = levels;

        function canHire(level) {
            return level.getNewWorkerCost() <= resources.cash;
        }

        function hireWorker(level) {
            resources.cash -= level.getNewWorkerCost();
            level.addWorker();
        }
    }
})();
