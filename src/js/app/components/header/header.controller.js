(function() {
    'use strict';

    angular
        .module('app.components')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['resources'];

    function HeaderController(resources) {
        var header = this;
        
        header.resources = resources;
    }
})();
