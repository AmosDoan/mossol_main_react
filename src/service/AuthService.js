import axios from 'axios';

const API_URL = 'http://localhost:8080';

class AuthService {

    register(RegisterRequest) {
        let data = JSON.stringify({
            id : RegisterRequest.id,
            password :RegisterRequest.password
        });
        return axios.post(`${API_URL}/auth/register`, data)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log("error : " + error)
            });
    }

    login(loginRequest) {
        let request = {
            userId : loginRequest.id,
            password : loginRequest.password
        };
        console.log("DEBUG::" + JSON.stringify(request));
        return axios.post(`${API_URL}/auth/login`, JSON.stringify(request),
            { headers : {'content-type' : 'application/json' }})
            .then(response => {
                console.log("DEBUG:::" + JSON.stringify(response));
                console.log(response.data);
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    request(token) {
        const AuthToken = 'Bearer '.concat(token);
        return axios.get(`${API_URL}/auth/login`, { headers: { Authorization : AuthToken} })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log("error : " + error)
            })
    }
}

export default new AuthService();