

const initialState = {
    response:{},
    products : [],
    dropdownList:{},
    showOnlyDifference:false,
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_RESPONSE":return {...state,response:action.target};
        case "UPDATE_DIFFERENCE":return {...state,showOnlyDifference:action.target};
        case "ADD_PRODUCT":
            return {...state, products : JSON.parse(JSON.stringify(action.target))};
        case "UPDATE_LIST":
            return {...state,dropdownList:action.target}    
        case 'REMOVE_PRODUCT':
            const idx = state.products.findIndex(product => product=== action.productId);
            let products = [...state.products];
            products.splice(idx, 1);
            return {...state, products};
        default : return state;
    }
};

export default reducer;