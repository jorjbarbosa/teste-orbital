<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-3">
        <div class="container">
            <a class="navbar-brand" href="#">Orbital</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" exact>Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="logout">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import userService from '../services/users';
    import Cookie from 'js-cookie';

    export default {
        methods: {
            logout() {
                userService.logout()
                    .then(res => {
                        Cookie.remove('jwt_token');
                        this.$router.push('/login');
                    })
                    .catch(err => console.log(err));
            }
        }
    }
</script>
