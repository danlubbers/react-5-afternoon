const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

// Create our Action types with const and variable is ALL CAPS!
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';

// All Action Creator Functions return a 'type' and 'payload'
export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
} 

export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE, 
        payload: property
    }
}

export function updateCity(city) {
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp(prop) {
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateFound(found) {
    return{
        type: UPDATE_FOUND,
        payload: found
    }
}

function reducer(state = initialState, action){
    switch(action.type) {
         // Adds our action types to our reducer
        case UPDATE_LOAN_TYPE:
        // Use Object.assign to get the previous value of state and update it's property value on the payload.
            return Object.assign( {}, state, {loanType: action.payload} );
        case UPDATE_PROPERTY_TYPE:
            return Object.assign( {}, state, {propertyType: action.payload} );
        case UPDATE_CITY:
            return Object.assign( {}, state, {city: action.payload} );
        case UPDATE_PROP:
            return Object.assign( {}, state, {propToBeUsedOn: action.payload} );
        case UPDATE_FOUND:
            return Object.assign( {}, state, {found: action.payload});

        // default: if nothing happens, it just returns original state
        default: return state;
    }
}

export default reducer;