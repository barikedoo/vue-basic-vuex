<template>
    <div id="product-list-two">
        <h2 style="width:100%">Product list two</h2>
        <li v-for="item in saleProducts" :key="item.id">
            <span class="name"> {{item.name}}:</span>
            <span class="price"> ${{ item.price }} </span>
        </li>
        <button @click="reducePrice"> Reduce</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    // Для корректной работы mapGetters необходимо установить babel-preset-stage-2 --save-dev
    computed: {
        ...mapGetters([
            'saleProducts'
        ])

    },
    methods: {
        reducePrice() {
            this.$store.commit('reducePrice');
        }
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

#product-list-two {
    display: flex;
    width: 800px;
    min-height: 100px;
    background: lightsalmon;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 20px;
    font-family: 'Ubuntu'
}

.price {
    font-weight: 700;
}
</style>
