(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.home',
            'app.underground-mining',
            'app.office',
            'app.resources',
            'ui.router',
            'LocalStorageModule'
        ])
        .run(bindState)
        .config(configureRouter)
        .config(configureLocalStorage);

    bindState.$inject = ['$rootScope', '$state', '$stateParams'];

    function bindState($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

    configureRouter.$inject = ['$locationProvider', '$urlRouterProvider'];

    function configureRouter($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider
            .otherwise('/');
    }

    configureLocalStorage.$inject = ['localStorageServiceProvider'];

    function configureLocalStorage(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('idle-miner')
    }

})();
