var app = new Vue( {
    el: '#app',
    data: {
        product:'Socks',
        price: 12,
        image: 'img/desk.JPG',
        alterText: 'This is the image of a desk',
        inventory: 1,
        details:['80% cotton', '20% polyester', 'General-neutral'],
        cart: 0,
        variants :[
            {
                variantId: 001,
                variantName: 'GreenSocks',
                variantImage: 'img/green.JPG'
            },
            
            {
                variantId: 002,
                variantName: 'BlueSocks',
                variantImage: 'img/desk.JPG'
            }
        ]
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
// v-on   -> @
// v-bind -> :
// v-for
// v-if
// v-else
// v-else-if
// @mouseover
// @click
// <form @submit
// <input @keyip.enter = "send">