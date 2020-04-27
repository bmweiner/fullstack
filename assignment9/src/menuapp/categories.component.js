(function(){
    'use strict';

    angular.module('Data')
        .component('categories', {
            templateUrl: 'src/menuapp/categories.list.template.html',
            bindings: {
                items: '<'
            }
        })
    ;

})();