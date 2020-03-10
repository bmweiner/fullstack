(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
        
        LunchCheckController.$inject = ['$scope'];

        function LunchCheckController ($scope) {
            $scope.checkItems = function(){
                $scope.valid = false;
                $scope.invalid = false;
                var items;

                // check if items is defined
                if (typeof $scope.items === 'undefined' | $scope.items == ''){
                    // undefined or empty string
                    items = [];
                } else {
                    // user entered text
                    items = $scope.items.split(',');
                }

                // strip surrounding whitespace from string
                items = items.map(function(s){
                    return s.trim();
                });

                // remove zero length string from items
                items = items.filter(function(s){
                    return s != "";
                });

                // update message
                if(items.length == 0){
                    $scope.message = "Please enter data first";
                    $scope.invalid = true;

                } else if(items.length > 3){                    
                    $scope.message = "Too much!";
                    $scope.valid = true;

                } else {
                    $scope.message = "Enjoy!";
                    $scope.valid = true;
                }
            }

            $scope.fontClass = function(){
                return { 
                    "green-font": $scope.valid,
                    "red-font": $scope.invalid
                };
            }

            $scope.borderClass = function () {
                return {
                    "green-border": $scope.valid,
                    "red-border": $scope.invalid
                };
            }
        };
})();