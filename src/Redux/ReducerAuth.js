import Cookies from 'universal-cookie'
import jwt from 'jsonwebtoken'

const cookies = new Cookies()
const token = cookies.get('_tKJKASKHDS')
let initialState = ''

if (token) {
    const aku = jwt.decode(token)
    const timeExp = new Date(aku.exp * 1000)
    if (timeExp < Date.now()) {
        console.log("exipred")
        console.log(timeExp)
        initialState = {
            user: '',
            isLoading: false,
            isLoggedIn: false
        }

    } else {
        console.log("enggak kok")
        console.log(timeExp)
        initialState = {
            user: aku.username,
            isLoading: false,
            isLoggedIn: true,
            token: token
        }
    }
} else {
    initialState = {
        user: '',
        isLoading: false,
        isLoggedIn: false
    }
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LOGIN':
            return {
                ...state,
                isLoggedIn: action.value
            }
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
        default:
            return state
    }
}

export default AuthReducer