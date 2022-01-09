import React from 'react';


const City = ({city}) => {
   

        const {name, img, country} = city;

        return (
            <div className="card bg-light pb-2 mb-5">
                <img src={img} alt="card cap" className="cardImage"/>
                <div className="titleContainer d-flex flex-column align-center pt-2"> 
                    <h3 className='text-black text-center'><strong>{name}</strong></h3>
                    <h5 className='text-center'>{country}</h5>
                </div>
            </div>
                
        )
    
}

export default City;
