(function() {
    angular.module('demo', [])
        .controller('DemoController', DemoController);

    function DemoController($http) {
        var vm = this;

        vm.go = go;

        function go() {
            vm.name = null;
            if (!vm.stop) {
                $http.get('https://api.github.com/users/azurelogic').then(function(res) {
                    vm.name = res.data.name;
                });
            }
        }
    }
})()