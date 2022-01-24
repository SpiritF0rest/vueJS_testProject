// data
const products = [
    { id: 1, description: "Black Mamba", price: 12, img: 'assets/img/black_mamba.jpg'},
    { id: 2, description: 'Caboom', price: 11, img: 'assets/img/caboom.jpg'},
    { id: 3, description: 'Extreme Burn', price: 17, img: 'assets/img/extreme_burn.jpg'},
    { id: 4, description: 'First Blood', price: 8, img: 'assets/img/first_blood.jpg'},
    { id: 5, description: 'Frost Bite', price: 3, img: 'assets/img/frost_bite.jpg'},
    { id: 6, description: 'Magma', price: 15, img: 'assets/img/magma.jpg'},
    { id: 7, description: 'Next Day', price: 13, img: 'assets/img/next_day.jpg'},
    { id: 8, description: 'Pineapple and Habanero', price: 5, img: 'assets/img/pineapple_habanero.jpg'},
    { id: 9, description: 'Reaper', price: 9, img: 'assets/img/reaper.jpg'},
    { id: 10, description: 'Tabasco Scorpion', price: 6, img: 'assets/img/tabasco_scorpion.jpg'},
    { id: 11, description: 'Trinidad', price: 8, img: 'assets/img/trinidad.jpg'},
    { id: 12, description: 'Vicious Viper', price: 6, img: 'assets/img/vicious_viper.jpg'},
];

const Home = {
    template: "#home",
    name: "Home",
    data: () => {
        return {
        products,
        }
    }
}
const UserSettings = {
    template: "<h1>User Settings</h1>",
    name: "UserSettings"
}
const WishList = {
    template: "<h1>Wish List</h1>",
    name: "WishList"
}
const ShoppingCart = {
    template: "<h1>Shopping Cart</h1>",
    name: "ShoppingCart"
}

// router
const router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: "Home" },
        { path: '/user-settings', component: UserSettings, name: "UserSettings" },
        { path: '/wish-list', component: WishList, name: "WhishList" },
        { path: '/shopping-cart', component: ShoppingCart, name: "ShoppingCart" },
    ]
})



const vue = new Vue({
    router
}).$mount("#app");