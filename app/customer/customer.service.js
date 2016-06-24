(function(){
    'use strict';
    
    angular
        .module('app')
        .factory('CustomerService', CustomerService);
    
    CustomerService.$inject = [];
    /* @ngInject */
    function CustomerService(){
        var service = {
            
        };
        return service;
    }
    
}());