(function () {
    'use strict';

    angular.module('Data')
        .component('items', {
            templateUrl: 'src/menuapp/items.list.template.html',
            bindings: {
                items: '<'
            }
        })
        ;

})();