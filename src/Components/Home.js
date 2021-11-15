import React from 'react'

import { connect } from 'react-redux'

class Homepage extends React.Component {

    componentDidMount(){
        console.log(this.props.changeUser(390))
    }

    componentDidUpdate(){
        console.log(this.props.storeData)
    }

    render(){
        if (!this.props.isLogin){
            window.location.href = '/login';
        }
        return(
            <h1>Ini Home : {this.props.userData}{this.props.userTes}</h1>
        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.isLoading,
    userData: state.user,
    isLogin: state.rootReducer.isLoggedIn,
    Toke: state.token,
    userTes: state.user,
    storeData: state
})

const mapsDispatchToProps = (dispatch) => {
    return { 
        changeUser: (newValue) => {
            dispatch({
                type: 'CHANGE_PROFIL',
                value: newValue
            })
        },
        
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Homepage)