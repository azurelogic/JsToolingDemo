(function() {
    angular.module('demo', [])
        .controller('DemoController', DemoController);

    function DemoController($http) {
        var vm = this;

        vm.go = go;
        vm.block = block;

        function go() {
            vm.name = null;
            if (!vm.stop) {
                return $http.get('https://api.github.com/users/azurelogic').then(function(res) {
                    vm.name = res.data.name;
                });
            }
        }

        function block() {
            vm.stop = !vm.stop;
            vm.name = null;
        }
    }
})()