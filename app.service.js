(function(){

    angular
        .module('app')
        .service("AppService", AppService);

    AppService.$inject = [];
    function AppService(){
        
        this.firstService = firstService;
        this.secondService = secondService;

        function firstService(){
            console.log("FirstService called");
        }

        function secondService(){
            console.log("SecondService called");
        }

    }

})();