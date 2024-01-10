import axios from 'axios';
import Cookie from 'js-cookie';


export default {

    getProducts() {
        const token = Cookie.get('jwt_token');
        return axios.get(`${APP_URL}/api/products`, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
    },
    createProduct(data) {
        const token = Cookie.get('jwt_token');
        return axios.post(`${APP_URL}/api/products`, data, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
    }
}
