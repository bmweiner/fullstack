describe("MenuService", function (){
    var service;
    var $httpBackend;
    var ApiPath;
    var short_name = 'A1';
    var DATA = { "id": 1, "short_name": "A1", "name": "Won Ton Soup with Chicken", "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions", "price_small": 2.55, "price_large": 5.0, "small_portion_name": "pint", "large_portion_name": "quart", "created_at": "2020-05-11T23:04:45.913Z", "updated_at": "2020-05-11T23:04:45.913Z", "category_short_name": "A", "image_present": true }

    beforeEach(function (){
        module('common');

        inject(function($injector){
            service = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            ApiPath = $injector.get('ApiPath');
        });
    });

    it('should return menu item', function(){
        $httpBackend
        .whenGET(
            ApiPath + '/menu_items/' + short_name + '.json'
        ).respond(
            DATA
        );

        service.getShortName(short_name).then(function(response){
            expect(response).toEqual(DATA);
        });

        $httpBackend.flush();
    });
});
