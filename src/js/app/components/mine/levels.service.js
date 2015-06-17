(function() {
    'use strict';

    angular
        .module('app.components')
        .service('levels', LevelsService);

    LevelsService.$inject = [];

    function LevelsService() {
        var service = {
                addLevel: addLevel,
                getNewLevelCost: getNewLevelCost,
                levels: []
            };

        activate();

        return service;

        function activate() {
            service.addLevel();
        }

        function addLevel() {
            service.levels.push(new Level(service.levels.length + 1));
        }

        function getNewLevelCost() {
            return Math.pow(10, service.levels.length);
        }

    }
    
    function Level(deep) {
        var level = this;

        level.deep = deep;
        level.workers = [];
    }

    Level.prototype.addWorker = function() {
        var level = this;
        level.workers.push(new Worker(level.deep));
    }

    Level.prototype.dig = function() {
        var level = this;
        return {Coal: Math.pow(10, level.deep - 1)};
    }

    Level.prototype.getNewWorkerCost = function() {
        var level = this;
        return Math.pow(10, level.deep) * Math.pow(1.4, level.workers.length);
    }

    function Worker(deep) {
        var worker = this;

        worker.deep = deep;
    }

    Worker.prototype.dig = function() {
        var worker = this;
        return {Coal: Math.pow(10, worker.deep - 1)};
    }
})();

