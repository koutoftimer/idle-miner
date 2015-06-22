(function() {
    'use strict';

    angular
        .module('app.home', [
            'app.core',
            'app.office',
            'app.resources',
            'ui.router'
        ])
        .config(ConfigureHome);

    ConfigureHome.$inject = ['$stateProvider'];

    function ConfigureHome($stateProvider) {
        var mine = {
            name: 'home',
            templateUrl: '/js/app/home/home.template.html',
            title: 'Mine',
            url: '/'
        };

        $stateProvider
            .state(mine)
    }
})();
