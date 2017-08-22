import Vue from 'vue';
import Vuex from 'vuex'
import value from './modules/value'

Vue.use(Vuex);

// ИСПОЛЬЗОВАТЬ ЛИБО ТОЛЬКО МУТАЦИИ, ЛИБО ТОЛЬКО ЭКШЕНЫ!!!!!!!!!!!!!!!!!!
// Если есть хотя бы одно асинхронное действие - лучше использовать экшены на все существующие действия, даже те, которые выполняются синхронно

export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'Banana', price: 20 },
            { name: 'Grape', price: 30 },
            { name: 'Apple', price: 40 },
            { name: 'Plums', price: 50 }
        ],
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(productCopy =>{
                return {
                    name: 'SALE on ' + productCopy.name + ' % off',
                    price: productCopy.price / 2,
                }
            });

            return saleProducts;
        },
    },
    // Все мутации должны быть синхронны
    mutations: {
        reducePrice: state => {
            state.products.forEach(product => {
                product.price -= 1;
            })
        },
        changeName: (state,newName) => {
            state.products[0].name = newName;
        },
        increment: (state, payload) => {
            state.products.forEach(product =>{
                product.price += payload;
            })
        },
        tripleIncrement: state => {
            state.products.forEach(product =>{
                product.price +=3;
            })
        },

    },
    // Для всех асинхронных методов используем actions, внутри которых вызываем мутации
    actions: {
        ruminize: (context,newName) => {
            setTimeout(function(){
                context.commit('changeName', newName)
            }, 3000);
        },
        asyncIncrease: (context,payload) => {
            setTimeout(() => {
                context.commit('increment',payload.by);
            },payload.duration)
        },
        asyncDecrease: context => {
            setTimeout(() => {
                context.commit('reducePrice');
            },3000)
        },

    },

    modules: {
        value
    }
})