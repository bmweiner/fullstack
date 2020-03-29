(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('price', priceFilter)
    ;
        
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;
        buy.items = ShoppingListCheckOffService.getItemsToBuy();

        buy.boughtItem = function(itemIndex){
            ShoppingListCheckOffService.boughtItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getItemsBought();

    }

    ShoppingListCheckOffService.$inject = ['priceFilter'];
    function ShoppingListCheckOffService(priceFilter){
        var service = this;

        var itemsToBuy = [
            { name: "cookies", quantity: 10, pricePerItem: 1 },
            { name: "oranges", quantity: 5, pricePerItem: .75 },
            { name: "soap", quantity: 2, pricePerItem: 3 },
            { name: "pepper", quantity: 3, pricePerItem: 2 },
            { name: "wine", quantity: 20, pricePerItem: 15 },
        ];

        var itemsBought = [];

        service.boughtItem = function (itemIndex){
            console.log(itemIndex);
            var item = itemsToBuy.splice(itemIndex, 1)[0];
            item.price = priceFilter(item.quantity * item.pricePerItem);
            itemsBought.push(item);
        };

        service.getItemsToBuy = function(){
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

    }

    priceFilter.$inject = ['$filter'];
    function priceFilter($filter){
        return function (input){
            return '$$$' + $filter('currency')(input, '')
        }
    }

})();
