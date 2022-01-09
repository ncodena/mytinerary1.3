import React, {useReducer} from 'react';
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

const CitiesState = props => {
    const initialState = {
        loading: false,
        //cities: [],
        cities: [
            {
                id: 1,
                name: 'Barcelona',
                country: 'Spain',
                img: 'https://images.ecestaticos.com/HC-OGY71V9SczyURHSCDJmdM0Po=/0x0:1254x836/1338x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1f4%2F283%2Fbc7%2F1f4283bc73a4e89e27fbba97cff6c4f8.jpg'

            },
            {
                id: 2,
                name: 'Amsterdam',
                country: 'Netherlands',
                img: 'https://www.holland.com/upload_mm/d/0/7/69550_fullimage_fietsen-amsterdam_1360x.jpg'
            },
            {
                id: 3,
                name: 'Firenze',
                country: 'Italy',
                img: 'https://www.brindamosporviajar.com/wp-content/uploads/2019/04/Florencia-3807.jpg'
            }
        ],
        error: '',
        filtered: null
        //city: {}
    }

    const [state, dispatch] = useReducer(cityReducer, initialState)

    //Get cities

    //Filter cities

     const filterCities = text => {
        dispatch({type: FILTER_CITIES, payload: text});
    };

    //Clear filter

   const clearCities = () => {
        dispatch({type: CLEAR_CITIES});
    };

    return (
        <CityContext.Provider
        value={{
            cities: state.cities,
            filtered: state.filtered,
            filterCities,
            clearCities

        }}
        >
            {props.children}
        </CityContext.Provider>
    );
};

export default CitiesState; 
