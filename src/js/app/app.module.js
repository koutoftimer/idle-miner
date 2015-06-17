(function() {
    'use strict';

    angular
        .module('app', [
            'app.mine',
            'app.office',
            'ui.router'
        ])
        .run([
            '$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ])
        .config([
            '$locationProvider', '$urlRouterProvider',
            function($locationProvider, $urlRouterProvider) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider
                    .otherwise('/');
            }
        ]);
})();
