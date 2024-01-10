import axios from 'axios';
import Cookie from 'js-cookie';


export default {

    getProducts() {
        const token = Cookie.get('jwt_token');
        return axios.get('http://teste-orbital.test/api/products', {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
    },
    createProduct(data) {
        const token = Cookie.get('jwt_token');
        return axios.post('http://teste-orbital.test/api/products', data, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
    }
}
