import Cookie from "js-cookie";

export default {
    register(data) {
        return axios.post(`${APP_URL}/api/users`, data);
    },
    login(data) {
        return axios.post(`${APP_URL}/api/login`, data, {
            headers: {
                "Content-type": "application/json",
                "Access": "application/json",
            }
        });
    },
    logout() {
        const token = Cookie.get('jwt_token');
        return axios.post(`${APP_URL}/api/logout`, {}, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }
}
