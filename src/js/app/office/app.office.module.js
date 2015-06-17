(function() {
    'use strict';

    angular
        .module('app.office', [
            'app.components',
            'ui.router'
        ])
        .config(ConfigureOffice);

    ConfigureOffice.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ConfigureOffice($stateProvider) {
        var office = {
                abstract: true,
                name: 'office',
                template: '<ui-view/>',
                title: 'Office',
                url: '/office'
            },
            officeSell = {
                name: 'sell-center',
                parent: office,
                templateUrl: 'js/app/office/sell/sell.template.html',
                title: 'Sell center',
                url: '/sell'
            },
            officeEmployee = {
                name: 'employee-center',
                parent: office,
                templateUrl: 'js/app/office/employee/employee.template.html',
                title: 'Employee center',
                url: '/employee'
            },
            officeUpgrade = {
                name: 'upgrade-center',
                parent: office,
                templateUrl: 'js/app/office/upgrade/upgrade.template.html',
                title: 'Upgrade center',
                url: '/upgrade'
            };

        $stateProvider
            .state(office)
            .state(officeSell)
            .state(officeEmployee)
            .state(officeUpgrade)
    }
})();
