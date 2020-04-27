(function(){
    'use strict';

    var CATEGORIES_URL = 'https://davids-restaurant.herokuapp.com/categories.json';
    var ITEMS_URL = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';

    angular.module('Data')
        .service('MenuDataService', MenuDataService)
    ;

    MenuDataService.$inject = ["$http"];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function(){
            return $http({
                method: "GET",
                url: CATEGORIES_URL
            }).then(function (result) {
                return result.data;
            })
        }

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                params: {
                    category: categoryShortName
                },
                url: ITEMS_URL
            }).then(function (result) {
                return result.data.menu_items;
            })
        }
    }

})();
