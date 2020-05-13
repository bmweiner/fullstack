(function () {
    "use strict";

    angular.module('public')
        .directive('shortname', ShortNameDirective);

    ShortNameDirective.$inject = ['MenuService'];
    function ShortNameDirective(MenuService) {
        var ddo = {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.shortname = function (short_name) {
                    return MenuService.getShortName(short_name);
                };
            }
        };

        return ddo;
    }

})();
