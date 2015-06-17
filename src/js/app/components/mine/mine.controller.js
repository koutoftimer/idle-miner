(function() {
    'use strict';

    angular
        .module('app.components')
        .controller('MineController', MineController);

    MineController.$inject = ['resources', 'levels', '$interval'];

    function MineController(resources, levels, $interval) {
        var mine = this;
        
        mine.dig = dig;
        mine.levels = levels;
        mine.resources = resources;

        function dig(level) {
            resources.add(level.dig());
        }
    }
})();
