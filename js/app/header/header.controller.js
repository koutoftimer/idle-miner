(function() {
    'use strict';

    angular
        .module('app')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['resources'];

    function HeaderController(resources) {
        var header = this;
        
        header.resources = resources;
    }
})();
