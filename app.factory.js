(function(){
    angular
        .module('app')
        .factory('AppFactory', AppFactory);

    AppFactory.$inject = ['$http'];
    function AppFactory($http){
        
        return {
            firstFactory: firstFactory,
            secondFactory: secondFactory
        };
        //return result; 

        function firstFactory(){
            console.log("First Factory called!");
        }
        function secondFactory(){
            console.log("Second Factory called!");
        }
    }

})();