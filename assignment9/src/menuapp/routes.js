(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig)
    ;

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menuapp/categories.template.html',
                controller: 'CategoriesController as categories',
                resolve: {
                    items: ['MenuDataService', function(MenuDataService){
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/{categoryShortName}',
                templateUrl: 'src/menuapp/items.template.html',
                controller: 'ItemsController as items',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', 
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory(
                                $stateParams.categoryShortName
                            );
                        }
                    ]
                }
            })
        ;
    }

})();
