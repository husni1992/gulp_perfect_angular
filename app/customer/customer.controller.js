(function(){
    'use strict';
    
    angular
        .module('app')
        .controller('CustomerController', CustomerController);
    
    function CustomerController(){
        var vm = this;
        vm.name = "CustomerControllerHusny";
    }
    
}());