import React, { useContext, useEffect } from 'react';
import Cities from './Cities';
import CitiesFilter from '../CitiesFilter';
import AuthContext from '../../context/auth/AuthContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])
    return (
        <div className='col-7'>
        <CitiesFilter/>
            <Cities/>
        </div>
    )
}

export default Home;

