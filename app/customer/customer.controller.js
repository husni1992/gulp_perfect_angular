(function(){
    'use strict';
    
    angular
        .module('app')
        .controller('CustomerController', CustomerController);
    
    CustomerController.$inject = [];
    /* @ngInject */       
    function CustomerController(){
        var vm = this;
        vm.name = "Message from CustomerController";
    }
    
}());