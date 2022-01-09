import {FILTER_CITIES, CLEAR_CITIES } from './types';
console.log(FILTER_CITIES);

 const cityReducer = (state, action) => {
    switch(action.type) {
        case FILTER_CITIES:
            return {
                ...state,
                filtered: state.cities.filter(({ name, country }) => {
                    const testString = `${name}${country}`.toLowerCase();
                    return testString.includes(action.payload.toLowerCase());
                  })
                //loading: false,
                //error: action.error
            }
            case CLEAR_CITIES:
        return {
            ...state,
            loading: false,
            error: action.error,
            filtered: null
        }
        
            default:
                return state;
    }

};

export default cityReducer;