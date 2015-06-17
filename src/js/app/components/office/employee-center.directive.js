(function() {
    'use strict';

    angular
        .module('app.components')
        .directive('mnrEmployeeCenter', EmployeeCenter);

    EmployeeCenter.$inject = [];

    function EmployeeCenter(controller) {
        var directive = {
            bindToController: true,
            controller: 'EmployeeCenterController',
            controllerAs: 'employeeCenter',
            restrict: 'EA',
            templateUrl: 'js/app/components/office/employee-center.directive.html'
        };

        return directive;
    }
})();

