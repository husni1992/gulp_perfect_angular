(function(){
    'use strict';
    
    angular
        .module('app')
        .config(['$urlRouterProvider', '$stateProvider', function appConfig($urlRouterProvider, $stateProvider){
        $stateProvider
        .state('Mydeal', {
            url: '/mydeal',
            templateUrl: 'mydeal/mydeal.tmpl.html',
            controller: 'MydealController'
        })
        .state('Customer', {
            url: '/customer',
            templateUrl: 'customer/customer.tmpl.html',
            controller: 'CustomerController',
            controllerAs: 'vm'
        })
        
        $urlRouterProvider.otherwise('/customer')
    }]);
                
}());