import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import { Provider } from "react-redux";

// import { history } from './helper/history'

import store from "./store";

class Routs extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/login" element={ <Login /> }></Route>
                    <Route path="/register" element={ <Register /> }></Route>
                </Routes>
            </Router>
            </Provider>
        )
    }
}

export default Routs