(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
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

    function ShoppingListCheckOffService(){
        var service = this;

        var itemsToBuy = [
            { name: "cookies", quantity: 10 },
            { name: "oranges", quantity: 5 },
            { name: "soap", quantity: 2 },
            { name: "pepper", quantity: 3 },
            { name: "wine", quantity: 20 },
        ];

        var itemsBought = [];

        service.boughtItem = function (itemIndex){
            console.log(itemIndex);
            var item = itemsToBuy.splice(itemIndex, 1)[0];
            itemsBought.push(item);
        };

        service.getItemsToBuy = function(){
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

    }

})();
