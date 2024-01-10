<template>
    <Navbar></Navbar>
    <div class="container">
        <div class="row d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div class="col-md-6 mx-auto my-auto">
                <div class="card">
                    <div class="card-header">Cadastrar Novo Produto</div>
                    <div class="card-body">
                        <form @submit.stop.prevent="submitForm">
                            <div class="mb-2">
                                <label for="name" class="form-label">Nome</label>
                                <input type="text" class="form-control" v-model="name">
                            </div>

                            <div class="mb-2">
                                <label for="description" class="form-label">Descrição</label>
                                <textarea class="form-control" rows="3" v-model="description"></textarea>
                            </div>

                            <div class="mb-2">
                                <label for="category" class="form-label">Categoria</label>
                                <input type="text" class="form-control" v-model="category">
                                <div v-if="errors && errors.category" class="invalid-feedback">
                                    {{ errors.category[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="image_file" class="form-label">Imagem</label>
                                <input class="form-control" type="file" @change="handleFileChange">
                            </div>
                            <div class="d-grid col-6 mx-auto">
                                <button type="submit" class="btn btn-primary btn-block">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import productService from '../services/products';
    import Navbar from '../components/Navbar.vue';

    export default {
        data() {
            return {
                name: '',
                description: '',
                category: '',
                image_file: null,
                errors: {}
            }
        },
        components: {
            Navbar
        },
        methods: {
            handleFileChange(event) {
                this.image_file = event.target.files[0];
            },
            submitForm() {
                const formData = new FormData();

                formData.append('name', this.name);
                formData.append('description', this.description);
                formData.append('category', this.category);
                formData.append('image_file', this.image_file);

                productService.createProduct(formData)
                    .then(res => {
                        this.$swal({
                            title: "Sucesso!",
                            text: "Produto Cadastrado com sucesso!",
                            icon: "success",
                            allowOutsideClick: false
                        })
                        .then(() => {
                            this.$router.push('/');
                        });
                    })
                    .catch(err => {
                        if (err.response && err.response.data.errors) {
                            this.errors = JSON.parse(JSON.stringify(err.response.data.errors));
                        }
                        this.$swal({
                            title: "Erro!",
                            text: "Ocorreu um erro ao cadastrar o produto, verifique os dados e tente novamente",
                            icon: "error",
                            allowOutsideClick: false
                        })
                    })
            }
        }
    }
</script>
