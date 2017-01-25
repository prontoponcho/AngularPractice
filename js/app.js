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
            price: 2,
            description: 'This bomb gem won\'t lose it\'s luster or shine',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'img/dodecahedron-full.jpg',
                    thumb: null
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 2.95,
            description: 'This bomb gem won\'t lose it\'s luster or shine',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'img/pentagonal-full.jpg',
                    thumb: null
                }
            ]

        }
    ];

    app.controller('PanelController', function(){
        this.tab = 1;

        this.isSelected = function(val) {
            return this.tab === val;
        };

        this.setTab = function(val) {
            this.tab = val;
        };
    });

})();