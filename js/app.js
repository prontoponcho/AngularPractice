// wrapping JS in a closure is a good habit
(function() {
    var app = angular.module('store', []);

    // The controller is attached to (inside) our app.
    app.controller('StoreController', function(){
        this.product = gems;

    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'This bomb gem won\'t lose it\'s luster or shine',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal Gem',
            price: 2.95,
            description: 'This bomb gem won\'t lose it\'s luster or shine',
            canPurchase: true,
            soldOut: false
        }
    ];

})();