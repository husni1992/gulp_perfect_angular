(function(){
    'use strict';
    
    angular
        .module('app', [
            'ui.router',
            'ngMaterial'
        ])
    .run(function($rootScope, $state){
        $rootScope.state = $state;
    })
}());