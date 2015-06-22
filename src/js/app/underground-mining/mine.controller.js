(function() {
    'use strict';

    angular
        .module('app.underground-mining')
        .controller('MineController', MineController);

    MineController.$inject = ['resources', 'levels'];

    function MineController(resources, levels) {
        var mine = this;
        
        mine.dig = dig;
        mine.levels = levels;
        mine.resources = resources;

        function dig(level) {
            resources.add(level.dig());
        }
    }
})();
