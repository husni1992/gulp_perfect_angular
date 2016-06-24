(function(){
    'use strict';
    
    angular
        .module('app')
        .config(appConfig);
    
    
    appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
    /* @ngInject */
    function appConfig($urlRouterProvider, $stateProvider){
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
    }
                
}());