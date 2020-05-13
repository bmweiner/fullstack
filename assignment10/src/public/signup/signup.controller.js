(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        var ctrl = this;
        ctrl.submit = function() {
            SignUpService.setParams(
                {
                    firstname: ctrl.firstname,
                    lastname: ctrl.lastname,
                    email: ctrl.email,
                    phone: ctrl.phone,
                    shortname: ctrl.shortname,
                    submitted: true
                }
            )
            ctrl.submitted = true;
        };
    }

})();
