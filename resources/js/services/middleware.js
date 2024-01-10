import axios from "axios";
import Cookie from "js-cookie";

export default {
    auth(to, from, next) {
        const token = Cookie.get('jwt_token');

        if (!token) {
            next('/login');
            return;
        }

        axios.get('http://teste-orbital.test/api/verify_token', {
            headers: {
                "Authorization": `bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.data && !res.data.valid) {
                console.log(import.meta.env.VITE_APP_NAME)
                next('/login');
                return;
            }
        })

        next();
        return;
    }
}
