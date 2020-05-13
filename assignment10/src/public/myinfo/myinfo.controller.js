(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignUpService', 'ApiPath', 'MenuService'];
    function MyInfoController(SignUpService, ApiPath, MenuService) {
        var ctrl = this;
        ctrl.params = SignUpService.getParams();
        ctrl.submitted = ctrl.params["submitted"];

        ctrl.firstname = ctrl.params["firstname"];
        ctrl.lastname = ctrl.params["lastname"];
        ctrl.email = ctrl.params["email"];
        ctrl.phone = ctrl.params["phone"];
        ctrl.shortname = ctrl.params["shortname"];

        MenuService.getShortName(ctrl.shortname)
        .then( function (result){
            ctrl.title = result["name"];
            ctrl.description = result["description"];
        });

        ctrl.img = ApiPath + '/images/' + ctrl.shortname + '.jpg';
    }

})();
