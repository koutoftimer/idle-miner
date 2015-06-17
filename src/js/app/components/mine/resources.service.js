(function() {
    'use strict';

    angular
        .module('app.components')
        .factory('resources', ResourcesService);

    ResourcesService.$inject = [];

    function ResourcesService() {
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
            var cost = 1;

            resourcesNames.forEach(function(name) {
                resources[name] = 0;
                costs[name] = cost;
                cost *= 2;
            });
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
