(function () {
    angular.module('demo', [])
        .controller('DemoController', DemoController)
    .factory('demoRepository', demoRepository);


    function DemoController($http, demoRepository) {
        var vm = this;

        vm.go = go;
        vm.block = block;

        function go() {
            vm.name = null;
            if (!vm.stop) {
                return demoRepository.get().then(function (res) {
                    vm.name = res.data.name;
                });
            }
        }

        function block() {
            vm.stop = !vm.stop;
            vm.name = null;
        }
    }

    function demoRepository($http) {

        return {
            get: get
        };

        function get() {
            return $http.get('https://api.github.com/users/azurelogic');
        };
    };
})()
