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
const UPDATE_AGENT = 'AGENT';
const UPDATE_COST = 'COST';
const UPDATE_DOWN_PAYMENT = 'DOWN_PAYMENT';
const UPDATE_CREDIT = 'CREDIT';
const UPDATE_HISTORY = 'HISTORY';
const UPDATE_ADDRESS_1 = 'ADDRESS_1';
const UPDATE_ADDRESS_2 = 'ADDRESS_2';
const UPDATE_ADDRESS_3 = 'ADDRESS_3';
const UPDATE_FIRST_NAME = 'FIRST_NAME';
const UPDATE_LAST_NAME = 'LAST_NAME';
const UPDATE_EMAIL = 'EMAIL';
 
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

export function updateAgent(agent) {
    return{
        type: UPDATE_AGENT,
        payload: agent
    }
}

export function updateCost(cost) {
    return{
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateDownPayment(dp) {
    return{
        type: UPDATE_DOWN_PAYMENT,
        payload: dp
    }
}

export function updateCredit(credit) {
    return{
        type: UPDATE_CREDIT, 
        payload: credit 
    }
}

export function updateHistory(history) {
    return{
        type: UPDATE_HISTORY,
        payload: history 
    }
}

export function updateAddress1(address1) {
    return{
        type: UPDATE_ADDRESS_1,
        payload: address1
    }
}

export function updateAddress2(address2) {
    return{
        type: UPDATE_ADDRESS_2,
        payload: address2 
    }
}

export function updateAddress3(address3) {
    return{
        type: UPDATE_ADDRESS_3, 
        payload: address3
    }
}

export function updateFirstName(firstName) {
    return{
        type: UPDATE_FIRST_NAME,
        payload: firstName 
    }
}

export function updateLastName(lastName) {
    return{
        type: UPDATE_LAST_NAME,
        payload: lastName 
    }
}

export function updateEmail(email) {
    return{
        type: UPDATE_EMAIL, 
        payload: email
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
        case UPDATE_AGENT:
            return Object.assign( {}, state, {agent: action.payload});
        case UPDATE_COST:
            return Object.assign( {}, state, {cost: action.payload});
        case UPDATE_DOWN_PAYMENT:
            return Object.assign( {}, state, {dp: action.payload});
        case UPDATE_CREDIT: 
            return Object.assisgn( {}, state, {cost: action.payload});
        case UPDATE_HISTORY:
            return Object.assign( {}, state, {history: action.payload});
        case UPDATE_ADDRESS_1:
            return Object.assign( {}, state, {address1: action.payload});
        case UPDATE_ADDRESS_2:
            return Object.assign( {}, state, {address2: action.payload});
        case UPDATE_ADDRESS_3:
            return Object.assign( {}, state, {address3: action.payload});
        case UPDATE_FIRST_NAME: 
            return Object.assign( {}, state, {firstName: action.payload});
        case UPDATE_LAST_NAME: 
            return Object.assign( {}, state, {lastName: action.payload});
        case UPDATE_EMAIL: 
            return Object.assign( {}, state, {email: action.payload});

        // default: if nothing happens, it just returns original state
        default: return state;
    }
}

export default reducer;