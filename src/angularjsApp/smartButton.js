smartButtonController.$inject = ['$window'];

function smartButtonController($window) {
    var ctrl = this;
    ctrl.title = 'smart button'
    ctrl.sayHello = function () {
        $window.alert('hello chat');
    }
}


angular.module('angularjsDemo').component('smartButton', {
    templateUrl: '/smartButton.html',
    controller: smartButtonController,
    controllerAs: 'ctrl'
})