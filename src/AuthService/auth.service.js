import axios from 'axios'

const API_URL = 'http://localhost:8008'

class AuthService {
    login(username, password){
        return axios
            .post('http://localhost:8008/user-api-login', { username, password })
            .then( (response) => {
                // return response.data
                alert(response)
            })

    }
}

export default new AuthService()