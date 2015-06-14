(function() {
    'use strict';

    angular
        .module('app')
        .directive('mnrEmployeeCenter', EmployeeCenter);

    EmployeeCenter.$inject = [];

    function EmployeeCenter(controller) {
        var directive = {
            bindToController: true,
            controller: 'EmployeeCenterController',
            controllerAs: 'employeeCenter',
            restrict: 'EA',
            templateUrl: 'js/app/office/employee-center.template.html'
        };

        return directive;
    }
})();

