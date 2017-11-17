(function(){
    angular
        .module("app")
        .directive("myListing",myListing);

    myListing.$inject = ['$http', 'orderByFilter','limitToFilter'];

    function myListing($http, orderByFilter,limitToFilter){
       
        return {
            template: 'This is custom directive <br/>' +
            '<label>General Search <input ng-model="search.$"></label><br/>'+
            '<label>Name Search <input ng-model="search.name"></label><br/>'+
            '<label>Limit <input type="number" min="1" ng-model="numLimit"></label> <br/>'+
            '<table><tr>'+
            '<td><button ng-click=sortingData("name")>Name</button><span class="sortorder" ng-show=propertyName === "name" ng-class="{reverse: reverseCondition}"></span></td>'+
            '<td><button ng-click=sortingData("price")>Price</button><span class="sortorder" ng-show=propertyName == "price" ng-class="{reverse: reverseCondition}"></span></td>'+
            '<td><button ng-click=sortingData("stock")>Stock</button><span class="sortorder" ng-show=propertyName == "stock" ng-class="{reverse: reverseCondition}"></span></td></tr>'+
            '<tr ng-repeat="productsData in products | filter:search:strict | limitTo:numLimit" ng-class="{high: productsData.price >= 300, low: productsData.price < 300}" >'+
                '<td>{{ productsData.name }} </td><td> {{ productsData.price }} </td><td> {{ productsData.stock }}</td></tr>' +
            '</table>',
            scope: {
                name : '=',
                products : '='
            },
            link: link
        }; 

        function link(scope, element, attr){
             scope.resultLimit = function(numLimit){
                 console.log("value",numLimit);
                scope.products =  limitToFilter(scope.products,numLimit)
                console.log('Result',scope.products);
             }
            //reverse
            //propertyName
            //function sorting
            scope.propertyName = '';            
            scope.reverseCondition = true;
            scope.sortingData = function (property){
                scope.propertyName = property;
                scope.reverseCondition = !scope.reverseCondition; 
                scope.products = orderByFilter(scope.products, property, scope.reverseCondition);
                console.log('Name',scope.propertyName);

            }
        }
    }
})();