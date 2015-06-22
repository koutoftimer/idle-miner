(function() {
    'use strict';

    angular
        .module('app.office', [
            'app.core',
            'ui.router'
        ])
        .config(ConfigureOffice);

    ConfigureOffice.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ConfigureOffice($stateProvider) {
        var officeSell = {
                name: 'sell-center',
                templateUrl: 'js/app/office/sell/sell.template.html',
                title: 'Sell center',
                url: '/sell'
            },
            officeEmployee = {
                name: 'employee-center',
                templateUrl: 'js/app/office/employee/employee.template.html',
                title: 'Employee center',
                url: '/employee'
            },
            officeUpgrade = {
                name: 'upgrade-center',
                templateUrl: 'js/app/office/upgrade/upgrade.template.html',
                title: 'Upgrade center',
                url: '/upgrade'
            };

        $stateProvider
            .state(officeSell)
            .state(officeEmployee)
            .state(officeUpgrade)
    }
})();
