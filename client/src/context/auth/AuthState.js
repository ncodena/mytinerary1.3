import React, {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';


import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        USER_LOADED,
        AUTH_ERROR,
        LOGIN_SUCCESS,
        LOGIN_FAIL,
        LOGOUT,
        CLEAR_ERRORS

} from '../types';

const AuthState = props => {
    const initialState = {
        user: null,
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

 
    //Load user
    const loadUser = () =>{
    console.log('dd');
    }

    //Register user

    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const res = await axios.post('/api/users', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        }catch(err){

            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })

        }
    }

    //Login user
    const login = () =>{
    console.log('dd');
    }

    // Logout

    const logout = () =>{
        console.log('dd');
    }

    // Clear errors

    const clearErrors = () => dispatch({type: CLEAR_ERRORS});




    return (
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
            register,
            loadUser,
            login,
            logout,
            clearErrors
        }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState; 
