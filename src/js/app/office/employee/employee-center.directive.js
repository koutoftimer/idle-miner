(function() {
    'use strict';

    angular
        .module('app.office')
        .directive('mnrEmployeeCenter', EmployeeCenter);

    EmployeeCenter.$inject = [];

    function EmployeeCenter(controller) {
        var directive = {
            bindToController: true,
            controller: 'EmployeeCenterController',
            controllerAs: 'employeeCenter',
            restrict: 'EA',
            templateUrl: 'js/app/office/employee/employee-center.directive.html'
        };

        return directive;
    }
})();

