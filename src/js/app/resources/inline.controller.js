(function() {
    'use strict';

    angular
        .module('app.resources')
        .controller('InlineResourcesController', InlineResourcesController);

    InlineResourcesController.$inject = ['resources'];

    function InlineResourcesController(resources) {
        var header = this;
        
        header.resources = resources;
    }
})();
