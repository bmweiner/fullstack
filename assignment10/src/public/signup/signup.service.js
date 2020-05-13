(function () {
    "use strict";

    angular.module('public')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = [];
    function SignUpService() {
        var srvc = this;

        srvc.params = {
            submitted: false
        }

        srvc.setParams = function(params){
            srvc.params = params;
        }

        srvc.getParams = function(){
            return srvc.params;
        }
    }

})();
