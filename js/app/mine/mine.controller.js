(function() {
    'use strict';

    angular
        .module('app')
        .controller('MineController', MineController);

    MineController.$inject = ['resources', 'levels', '$interval'];

    function MineController(resources, levels, interval) {
        var mine = this;
        
        mine.dig = dig;
        mine.levels = levels;
        mine.resources = resources;

        activate();

        function activate() {
            interval(dig, 1000);

            function dig() {
                levels.levels.forEach(function(level) {
                    level.workers.forEach(function(worker) {
                        resources.add(worker.dig());
                    });
                });
            }
        }

        function dig(level) {
            resources.add(level.dig());
        }
    }
})();
