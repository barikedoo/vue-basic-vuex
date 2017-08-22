<template>
    <div id="product-list-one">
        <h2 style="width:100%">Product list one</h2><br>
        <li v-for="item in saleProducts" :key="item.id">
            <span class="name"> {{item.name}}:</span>
            <span class="price"> ${{ item.price }} </span>
        </li>
        <button @click="changeName('Havana')">Turn into Rum</button>
        <button @click="reducePrice"> Reduce</button>
        <!-- <button @click="increment">+1</button> -->
        <button @click="tripleIncrement">+3</button>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import {mapMutations} from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'products',
            'saleProducts'
        ])
    },
    methods: {
        changeName(newName) {
            this.$store.dispatch('ruminize', newName);
        },
        ...mapMutations([
            'reducePrice',
            'increment',
            'tripleIncrement'
        ])


    }
}
</script>

<style scoped>
li {
    list-style: none;
    display: inline-block;
    border: 1px solid black;
    padding: 10px 20px;
    height: 50px;
    margin: 15px;
}

#product-list-one {
    display: flex;
    width: 400px;
    min-height: 150px;
    background: wheat;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 18px;
    margin-bottom: 50px;
}
</style>
