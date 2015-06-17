(function() {
    'use strict';

    angular
        .module('app.mine', [
            'app.components',
            'ui.router'
        ])
        .config(ConfigureMine);

    ConfigureMine.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ConfigureMine($stateProvider) {
        var mine = {
            name: 'mine',
            templateUrl: 'js/app/mine/mine.template.html',
            title: 'Mine',
            url: '/'
        };

        $stateProvider
            .state(mine)
    }
})();
