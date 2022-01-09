import React from 'react';
import Cities from './Cities';
import CitiesFilter from '../CitiesFilter';

const Home = () => {
    return (
        <div className='col-7'>
        <CitiesFilter/>
            <Cities/>
        </div>
    )
}

export default Home;

