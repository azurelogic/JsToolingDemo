describe('DemoController', function () {
    var DemoController, sandbox, $rootScope, $q;
    var http = {};
    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    beforeEach(module('demo'));

    beforeEach(function () {
        module(function($provide) {
            $provide.value('$http', http);
        });
    });

    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_) {
        var $controller = _$controller_;
        $rootScope = _$rootScope_;
        $q = _$q_;
        DemoController = $controller('DemoController', { $scope: $rootScope.$new() });
    }));

    describe('block', function () {
        it('flips the value of stop', function () {
            DemoController.stop = false;

            DemoController.block();

            DemoController.stop.should.equal(true);
        });

        it('sets name to null', function () {
            DemoController.name = "road runner";

            DemoController.block();

            DemoController.name.should.equal(null);
        });
    });

    describe('go', function () {
        it('when stop is falsey it calls $http.get', function (done) {
            DemoController.stop = false;
            DemoController.name = null;

            http.get = sandbox.stub();

            var resultDeferred = $q.defer();
            resultDeferred.resolve({
                data: {name: 'road runner'}
            });
            http.get.returns({ result: resultDeferred.promise });

            DemoController.go().then(function () {
                DemoController.name.should.equal('road runner');

                done();
            });

            $rootScope.$apply();
        });
    });

    
});