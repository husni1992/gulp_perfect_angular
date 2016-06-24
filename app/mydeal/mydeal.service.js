(function(){
    'use strict';
    
    angular
        .module('app')
        .factory('MydealService', MydealsService);
    
    MydealsService.$inject = [];
    /* @ngInject */
    function MydealsService(){
        var service = {
            
        };
        return service;
    }
    
}());