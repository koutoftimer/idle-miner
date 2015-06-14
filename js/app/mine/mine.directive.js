(function() {
    'use strict';

    angular
        .module('app')
        .directive('mnrMine', MineDirective);

    MineDirective.$inject = [];

    function MineDirective() {
        var directive = {
            bindToController: true,
            controller: 'MineController',
            controllerAs: 'mine',
            restrict: 'EA',
            templateUrl: 'js/app/mine/mine.template.html'
        };

        return directive;
    }
})();
