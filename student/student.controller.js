(function(){
    angular
        .module("student")
        .controller("StudentController",StudentController);

    StudentController.$inject = ['AppFactory'];    
    function StudentController(AppFactory){
        var vm = this;
        vm.studentName = "Hello";
        vm.NumberOne = 110;

        vm.numbers = {
            number1: '',
            number2: ''
        };


        init();


        function init(){
           // console.log("hello from student controller");
        }        

    }

})();