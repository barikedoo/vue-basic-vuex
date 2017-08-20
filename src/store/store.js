import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'Banana', price: 20 },
            { name: 'Grape', price: 30 },
            { name: 'Apple', price: 40 },
            { name: 'Plums', price: 50 }
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(productCopy =>{
                return {
                    name: 'SALE on ' + productCopy.name + ' % off',
                    price: productCopy.price / 2,
                }
            });

            return saleProducts
        }
    },
    mutations: {
        reducePrice: state => {
            state.products.forEach(product => {
                return product.price -= 1;
            })
        },
        changeName: (state,newName) => {
            state.products[0].name = newName;
        }
    },
    actions: {
        ruminize: (context,newName) => {
            setTimeout(function(){
                context.commit('changeName', newName)
            }, 3000);
        }
    }
})