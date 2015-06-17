(function() {
    'use strict';

    angular
        .module('app.office')
        .controller('SellCenterController', SellCenterController);

    SellCenterController.$inject = ['resources'];

    function SellCenterController(resources) {
        var sellCenter = this;
        
        sellCenter.resources = resources;
        sellCenter.sell = sellResource;

        function sellResource(name) {
            resources.cash += resources.getCost(name);
            resources[name] = 0;
        }
    }
})();

