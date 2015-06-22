(function() {
    'use strict';

    angular
        .module('app.core')
        .service('levels', LevelsService);

    var levelConfig = {};

    LevelsService.$inject = ['$interval', 'resources'];

    function LevelsService($interval, resources) {
        var service = {
                addLevel: addLevel,
                getNewLevelCost: getNewLevelCost,
                levels: []
            };

        activate();

        return service;

        function activate() {
            service.addLevel();
            initLevelConfig();

            $interval(dig, 1000);

            function dig() {
                service.levels.forEach(function(level) {
                    level.workers.forEach(function(worker) {
                        resources.add(worker.dig());
                    });
                });
            }

            function initLevelConfig() {
                levelConfig.names = resources.getNames();

                levelConfig[1] = angular.extend(getNullChances(), {
                    coal: {
                        chance: 1,
                        quantity: 1
                    }
                });

                levelConfig[2] = angular.extend(getNullChances(), {
                    coal: {
                        chance: 0.95,
                        quantity: 2
                    },
                    iron: {
                        chance: 1,
                        quantity: 1
                    }
                });

                function getNullChances() {
                    var nullChance = {
                            chance: 0,
                            quantity: 0
                        },
                        nullChances = {};

                    levelConfig.names.forEach(function(name) {
                        nullChances[name] = nullChance;
                    });

                    return nullChances;
                }
            }
        }

        function addLevel() {
            service.levels.push(new Level(service.levels.length + 1));
        }

        function getNewLevelCost() {
            return Math.pow(60, service.levels.length);
        }

    }

    function Level(depth) {
        var level = this;

        level.depth = depth;
        level.workers = [];
    }

    Level.prototype.addWorker = levelAddWorker;
    Level.prototype.dig = levelDig;
    Level.prototype.getNewWorkerCost = levelGetNewWorkerCost;

    function Worker(depth) {
        var worker = this;

        worker.depth = depth;
    }

    Worker.prototype.dig = workerDig;

    function dig(depth) {
        var config = levelConfig[depth];

        for (var i = 0; i < levelConfig.names.length; ++i) {
            var resourceName = levelConfig.names[i];
            if (Math.random() < config[resourceName].chance) {
                var result = {};
                result[resourceName] = config[resourceName].quantity;
                return result;
            }
        }
    }

    function levelAddWorker() {
        var level = this;
        level.workers.push(new Worker(level.depth));
    }

    function levelDig() {
        var level = this;
        return dig(level.depth);
    }

    function levelGetNewWorkerCost() {
        var level = this;
        return Math.pow(10, level.depth) * Math.pow(1.4, level.workers.length);
    }

    function workerDig() {
        return dig(this.depth);
    }

})();
