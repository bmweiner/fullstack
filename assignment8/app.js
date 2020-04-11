(function () {
    'use strict';

    const MENU_ITEMS_URL = "https://davids-restaurant.herokuapp.com/menu_items.json"

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
    ;

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var search = this;

        search.term = "";
        search.found = []
        search.display = false;

        search.empty = function(){
            return search.found.length == 0;
        }

        search.get = function (searchTerm){
            if (search.term == ""){
                // empty search
                search.found = [];
                search.display = true;
            } else {
                // valid search
                console.log("Search Term:", searchTerm)

                MenuSearchService.getMatchedMenuItems(searchTerm).then(
                    function (foundItems) {
                        search.found = foundItems;
                        console.log("Items found:", search.found.length);
                        search.display = true;
                    }
                );
            }
        }

        search.remove = function (itemIndex) {
            console.log('Removed Item:', itemIndex);
            var item = search.found.splice(itemIndex, 1)[0];
        };

    }

    MenuSearchService.$inject = ["$http"];
    function MenuSearchService($http){
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: MENU_ITEMS_URL
            }).then(function(result){
                // process result and only keep items that match
                var foundItems = result.data.menu_items.filter(
                    item => item.description.includes(searchTerm)
                );

                // return processed items
                return foundItems;
            })
        }

    }

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'snippets/foundItems.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: 'NarrowItDownController as search',
            bindToController: true
        };

        return ddo;
    }

})();
