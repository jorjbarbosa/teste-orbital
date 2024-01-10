<template>
    <Navbar/>
    <div class="container mt-5">
        <div class="clearfix">
            <h1 class="mt-4 title">Lista de Produtos</h1>
            <router-link to="/product" class="btn btn-primary pull-right">Cadastrar Produto</router-link>
        </div>
        <hr>
        <div class="row">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
    import productService from '../services/products';
    import Navbar from '../components/Navbar.vue';
    import ProductCard from '../components/ProductCard.vue';

    export default {
        data() {
            return {
                products: []
            }
        },
        components: {
            Navbar,
            ProductCard
        },
        mounted() {
            this.getProducts()
        },
        methods: {
            getProducts() {
                productService.getProducts()
                    .then(res => { this.products = res.data })
                    .catch(error => console.log(error))
            }
        },
    }
</script>
<style lang="scss">
    .title {
        margin-top: 4.5rem !important;
    }
</style>
