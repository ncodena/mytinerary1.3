
import React, {useContext, useRef, useEffect }from 'react';
import CityContext from '../context/city/cityContext';


const CitiesFilter = ()  => {

    const cityContext = useContext(CityContext);

    const {filterCities, clearCities, filtered } = cityContext;

    const ref = useRef('');

    useEffect (() => {
        if (filtered === null){
            ref.current.value = null;
        }
    });

    const onChange = e => {

        if(ref.current.value !== ''){
            console.log(ref.current.value)
            filterCities(e.target.value);
        }else {
            clearCities();
        }

    }

    return (
        <form>

            <input type="text" ref={ref} placeholder='Filter cities...' onChange={onChange}/>
        </form>
    )
}

export default CitiesFilter;