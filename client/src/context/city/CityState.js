import React, {useReducer} from 'react';
import cityContext from './cityContext';
import cityReducer from './cityReducer';


import {REQUEST_CITIES, RECEIVE_CITIES, FAILURE_FETCHING_CITIES} from '../types';

const CitiesState = props => {
    const initialState = {
        loading: false,
        cities: [],
        error: ''
        //city: {}
    }

    const [state, dispatch] = useReducer(cityReducer, initialState)

    //Get cities

    return (
        <cityContext.Provider
        value={{
            cities: state.cities
        }}
        >
            {props.children}
        </cityContext.Provider>
    );
};

export default CitiesState; 
