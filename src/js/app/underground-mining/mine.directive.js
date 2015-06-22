(function() {
    'use strict';

    angular
        .module('app.underground-mining')
        .directive('mnrMine', MineDirective);

    MineDirective.$inject = [];

    function MineDirective() {
        var directive = {
            bindToController: true,
            controller: 'MineController',
            controllerAs: 'mine',
            restrict: 'EA',
            templateUrl: '/js/app/underground-mining/mine.directive.html'
        };

        return directive;
    }
})();
