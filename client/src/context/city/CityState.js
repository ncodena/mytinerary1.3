import React, {useReducer} from 'react';
import cityContext from './cityContext';
import cityReducer from '../cityReducer';


import {REQUEST_CITIES, RECEIVE_CITIES, FAILURE_FETCHING_CITIES} from '../types';

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
