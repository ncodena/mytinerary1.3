
import React, {Fragment, useContext }from 'react';
import CityContext from '../../context/city/cityContext';
import City from './City';


const Cities = ()  => {

    const cityContext = useContext(CityContext);

    const { cities, filtered } = cityContext;

    if(cities.length === 0){
        return <h4>No cities</h4>
    }

    
    return (
        
        <Fragment>

            <h2>Choose your city</h2>
            <br />
            {filtered !== null ? filtered.map(city => (<City key={city.id} city={city}/>)) : cities.map(city => 
            <City key={city.id} city={city}/>)}

            
            
            
            
        </Fragment>
    )
}

export default Cities;




