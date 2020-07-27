new Vue({
    el: '#textHello',
    data: {
        message: 'Hello World with Vue.js!',

    }
});

new Vue({
    el: '#textDesc',
    data: {
        message: 'Example web page to practice HTML and CSS skills. Experimentation in designing single web page with neon color theme.'

    }
});



new Vue({
    el:'#appImg',
    data:{
        message: 'textas',
        image: "./img/svg/Asset-4-blue.svg",
        image2: "./img/svg/Asset-4-orange.svg",
        blue: true

    }
})
new Vue({
    el:'#appList',
    data:{
        image: "./img/svg/Asset-4-blue.svg",
        variants: [{variantId: 1,variantColor: "Blue", variantImage:"./img/svg/Asset-4-blue.svg"},
                   {variantId: 2,variantColor: "Orange", variantImage:"./img/svg/Asset-4-orange.svg"},
                   {variantId: 3,variantColor: "Red", variantImage:"./img/svg/Asset-4-red.svg"}],
    }, // end data
    methods: {
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    } //end methods:


})