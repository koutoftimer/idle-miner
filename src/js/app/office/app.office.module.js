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
                name: 'office',
                templateUrl: 'js/app/components/office/office.template.html',
                title: 'Office',
                url: '/office'
            },
            officeSell = {
                name: 'office.sell',
                templateUrl: 'js/app/office/sell/sell.template.html',
                title: 'Sell center',
                url: '/sell'
            };

        $stateProvider
            .state(office)
            .state(officeSell)
    }
})();
