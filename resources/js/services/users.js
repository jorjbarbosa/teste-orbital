import Cookie from "js-cookie";

export default {
    register(data) {
        console.log(data)
        return axios.post(`http://teste-orbital.test/api/users`, data);
    },
    login(data) {
        return axios.post(`http://teste-orbital.test/api/login`, data, {
            headers: {
                "Content-type": "application/json",
                "Access": "application/json",
            }
        });
    },
    logout() {
        const token = Cookie.get('jwt_token');
        return axios.post(`http://teste-orbital.test/api/logout`, {}, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }
}
