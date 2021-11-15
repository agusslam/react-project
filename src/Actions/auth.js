// import AuthService from '../AuthService/auth.service'
import Axios from 'axios'
import Cookies from 'universal-cookie'

const API_URL = 'https://apiauthv1.herokuapp.com'

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: 'CHANGE_LOADING', value: true })
    Axios.post(API_URL + '/user/auth', {
      username: data.username,
      password: data.password
    })
      .then(function (response) {
        console.log(response.data.result);
        const cookies = new Cookies()
        dispatch({ type: 'CHANGE_LOADING', value: false })
        dispatch({ type: 'CHANGE_LOGIN', value: true })
        // dispatch({ type: 'CHANGE_USER', value: dataUser })
        cookies.set('_tKJKASKHDS', response.data.result.token)
        resolve(true)
      })
      .catch(function (error) {
        console.log(error);
        dispatch({ type: 'CHANGE_LOADING', value: false })
        dispatch({ type: 'CHANGE_LOGIN', value: false })
        reject(false)
      })
  })

}