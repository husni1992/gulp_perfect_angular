(function(){
    'use strict';
    
    angular
        .module('app', [
            'ui.router',
            'ngMaterial'
        ])
    .run(appRun);
    
    appRun.$inject = ['$rootScope', '$state'];
    /* @ngInject */    
    function appRun($rootScope, $state){
        $rootScope.state = $state;
    }
}());