<template>
    <div class="container">
        <div class="row d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div class="col-md-5 mx-auto my-auto">
                <div class="card">
                    <div class="card-header">Cadastrar Novo Usuário</div>
                    <div class="card-body">
                        <form @submit.stop.prevent="submitForm">
                            <div class="mb-2">
                                <label for="name" class="form-label">Nome</label>
                                <input type="text" class="form-control" v-model="name">
                            </div>

                            <div class="mb-2">
                                <label for="category" class="form-label">E-mail</label>
                                <input type="email" class="form-control" v-model="email">
                            </div>

                            <div class="mb-2">
                                <label for="category" class="form-label">Senha</label>
                                <input type="password" class="form-control" v-model="password">
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
    import userService from '../services/users';
    import Cookie from 'js-cookie';
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
            }
        },
        methods: {
            handleFileChange(event) {
                this.image_file = event.target.files[0];
            },
            submitForm() {
                const payload = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                userService.register(payload)
                    .then(res => {
                        this.$swal({
                            title: "Cadastro efetuado com sucesso!",
                            text: "Você será redirecionado para a tela principal",
                            icon: "success",
                            allowOutsideClick: false
                        })
                        .then(() => {
                            userService.login({ email: this.email, password: this.password })
                                .then(res => {
                                    Cookie.set('jwt_token', res.data.access_token);
                                    this.$router.push('/');
                                })

                        });
                    })
                    .catch(err => {
                        this.$swal({
                            title: "Erro",
                            text: "Ocorreu um erro ao efetuar o cadastro",
                            icon: "error",
                            allowOutsideClick: false
                        })
                    })
            }
        }
    }
</script>
