import axios from "axios";
import Cookie from "js-cookie";

export default {
    auth(to, from, next) {
        const token = Cookie.get('jwt_token');
        if (!token) {
            next('/login');
            return;
        }

        axios.get(`${APP_URL}/api/verify_token`, {
            headers: {
                "Authorization": `bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.data && !res.data.valid) {
                Cookie.remove('jwt_token');
                next('/login');
                return;
            }
        })

        next();
        return;
    },

    isLoggedIn(to, from, next) {
        const token = Cookie.get('jwt_token');
        if (token) {
            next('/')
            return;
        }

        next();
    }
}
