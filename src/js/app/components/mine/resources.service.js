(function() {
    'use strict';

    angular
        .module('app.components')
        .factory('resources', ResourcesService);

    ResourcesService.$inject = ['$interval', 'levels'];

    function ResourcesService($interval, levels) {
        var costs = {},
            resources = {
                add: addResources,
                cash: 0,
                getCost: getResourceCost,
                getNames: getResourcesNames
            },
            resourcesNames = ['Coal', 'Iron', 'Tin', 'Copper', 'Silver', 'Gold'];

        activate();

        return resources;

        function activate() {
            resourcesNames.forEach(initResource);
            $interval(dig, 1000);

            function initResource(name, index) {
                resources[name] = 0;
                costs[name] = Math.pow(2, index + 1);
            }

            function dig() {
                levels.levels.forEach(function(level) {
                    level.workers.forEach(function(worker) {
                        resources.add(worker.dig());
                    });
                });
            }
        }

        function addResources(resourcesList) {
            var keys = Object.keys(resourcesList);

            resourcesNames.forEach(function(name) {
                if (keys.indexOf(name) != -1) {
                    resources[name] += resourcesList[name];
                }
            });
        }

        function getResourceCost(name) {
            return resources[name] * costs[name];
        }

        function getResourcesNames() {
            return resourcesNames;
        }
    }
})();
