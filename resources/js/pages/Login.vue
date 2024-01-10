<template>
    <div class="container">
        <div class="row d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div class="col-md-4 mx-auto my-auto">
                <div class="card">
                    <div class="card-header">Por favor faça login</div>
                    <div class="card-body">
                        <form @submit.stop.prevent="login">
                            <div class="mb-2">
                                <label for="name" class="form-label">Nome</label>
                                <input type="text" class="form-control" v-model="email">
                            </div>
                            <div class="mb-2">
                                <label for="password" class="form-label">Senha</label>
                                <input type="password" class="form-control" v-model="password">
                            </div>
                            <div class="d-grid col-6 mx-auto">
                                <button type="submit" class="btn btn-primary btn-block mb-2">Entrar</button>
                                <router-link to="/register" class="btn btn-success btn-block">Registrar-se</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Cookie from 'js-cookie'
    import userService from '../services/users';
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
            };
        },
        methods: {
            login() {
                const payload = {
                    email: this.email,
                    password: this.password,
                };

                userService.login(payload)
                    .then(res => {
                        Cookie.set('jwt_token', res.data.access_token);
                        this.$router.push('/');
                    })
                    .catch(err => {
                        this.$swal({
                            title: "Erro",
                            text: "Ocorreu um erro ao efetuar o login, verifique os dados e tente novamente",
                            icon: "error",
                            allowOutsideClick: false
                        })
                    })
            }
        }
    };
</script>
<style>
    .form-login {
        max-width: 600px;
        padding: 1rem;
    }

    .form-login .form-floating:focus-within {
        z-index: 2;
    }

    .form-login input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-login input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
