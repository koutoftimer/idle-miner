(function() {
    'use strict';

    angular
        .module('app.core')
        .service('resources', ResourcesService);

    var resourceConfig = {
            coal: {
                name: 'Coal',
                cost: 1
            },
            iron: {
                name: 'Iron',
                cost: Math.pow(5, 1)
            },
            tin: {
                name: 'Tin',
                cost: Math.pow(5, 2)
            },
            copper: {
                name: 'Copper',
                cost: Math.pow(5, 3)
            },
            silver: {
                name: 'Silver',
                cost: Math.pow(5, 4)
            },
            gold: {
                name: 'Gold',
                cost: Math.pow(5, 5)
            }
        },
        resourcesNames = [];

    activateResourcesNames();


    function ResourcesService() {
        var service = new ResourcesList();

        activate();

        return service;

        function activate() {
            service.cash = 0;
        }
    }

    ResourcesService.prototype.ResourcesList = ResourcesList;


    function ResourcesList(values) {
        var resourcesList = this;

        activate();

        return resourcesList;

        function activate() {
            resourcesNames.forEach(function(name) {
                resourcesList[name] = 0;
            });
            resourcesList.add(values);
        }
    }

    ResourcesList.prototype.add = addResources;
    ResourcesList.prototype.getConfig = getResourceConfig;
    ResourcesList.prototype.getCost = getResourceCost;
    ResourcesList.prototype.getNames = getResourcesNames;


    function activateResourcesNames() {
        Object.keys(resourceConfig).forEach(function(name) {
            resourcesNames.push(name);
        });
    }

    function addResources(resourcesList) {
        if (!resourcesList) {
            return;
        }

        var keys = Object.keys(resourcesList),
            self = this;

        resourcesNames.forEach(function(name) {
            if (keys.indexOf(name) != -1) {
                self[name] += resourcesList[name];
            }
        });
    }

    function getResourceConfig() {
        return angular.copy(resourceConfig);
    }

    function getResourceCost(name) {
        return this[name] * resourceConfig[name].cost;
    }

    function getResourcesNames() {
        return angular.copy(resourcesNames);
    }

})();
