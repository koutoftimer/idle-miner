(function() {
    'use strict';

    angular
        .module('app.components')
        .directive('mnrMine', MineDirective);

    MineDirective.$inject = [];

    function MineDirective() {
        var directive = {
            bindToController: true,
            controller: 'MineController',
            controllerAs: 'mine',
            restrict: 'EA',
            templateUrl: 'js/app/components/mine/mine.directive.html'
        };

        return directive;
    }
})();
