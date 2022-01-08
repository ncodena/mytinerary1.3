
import React, {Fragment, useContext }from 'react';
import CityContext from '../../context/city/cityContext';
import City from './City';


const Cities = ()  => {

    const cityContext = useContext(CityContext);

    const { cities } = cityContext;
    return (
        <Fragment>

            
            <h2>Choose your city</h2>
            <br />
            {cities.map(city => 
            <City key={city.id} city={city}/>)}
            
        </Fragment>
    )
}

export default Cities;




