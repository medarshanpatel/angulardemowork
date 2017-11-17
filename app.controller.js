(function () {

    angular
        .module("app")
        .controller("InvoiceController", InvoiceController);

    InvoiceController.$inject = ['$scope', '$http', 'AppService', 'AppFactory'];

    function InvoiceController($scope, $http, AppService, AppFactory) {
        var vm = this;
        vm.name = "Darshan";
        vm.firstName = "";
        vm.sayHello = sayHello;
        vm.displayName = displayName;
        vm.passToDirective = passToDirective;
        vm.products = [{
            name: 'Phone',
            price: 100,
            stock: true
        }, {
            name: 'Laptop',
            price: 500,
            stock: false
        }, {
            name: 'Tablet',
            price: 140,
            stock: false
        }, {
            name: 'Telephone',
            price: 300,
            stock: true
        }, {
            name: 'Earphone',
            price: 100,
            stock: true
        }];
        $scope.emailRegex = '^[a-z0-9]+(\.[a-z0-9-_+]+)*[0-9a-z]+@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,})$';
        $scope.mobileNoRegex = '^[0-9](\.{9})+$';

        vm.emailReg = '^[a-z0-9]+(\.[a-z0-9-_+]+)*[0-9a-z]+@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,})$';

        $scope.names = ['name1', 'name2', 'name3'];
        $scope.my = ['name3'];

        
        //copy
        vm.obj1 = { firstname: "Darshan", lastname: "Patel" };
        vm.obj2 = {};
        angular.copy(vm.obj1, vm.obj2);

        //extend
        vm.data1 = { firstname: "Darshan", lastname: "Patel" };
        vm.data2 = { fname: "Test", lname: "Patel" };
        vm.data3 = {};
        angular.extend(vm.data3, vm.data1, vm.data2);

        //forEach
        angular.forEach(vm.products, function (value, key) {
        });
        //fromJson
        var serializedString = '{"fname":"Darshan","lname":"Patel"}';

        //  bind
        vm.addTen = angular.bind(this, add, 10, 10);
        init();
        function init() {
            
            checkArray = ['str1', 'str2']; // true
            angular.isArray(vm.checkArray);

            checkDate = new Date(); // true
            angular.isDate(checkDate);

            var foo; // true
            var bar = 42; // false
            angular.isDefined(foo);

            angular.isFunction(add); // true

            angular.isNumber(10);

            objectFirst = { "fname": "Darshan", "lname": "Patel" }; // object
            angular.toJson(objectFirst);// toJson


        }

        function sayHello() {
            console.log("Hello "+ vm.firstName);
        }

        function displayName(textToAppend) {
            // console.log("textToAppend", textToAppend);
            // console.log(textToAppend+ " "+ vm.firstName);
        }

        function passToDirective() {
            console.log("passToDirective called!");
        }

        function add(x, y, z) {
            //return x + y + z;
        }

    }
})();