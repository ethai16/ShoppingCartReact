var initialState = {
    totalCost: 0,
    productCart: []
}


function cartReducer(state,action){
    if(state === undefined){
        state = initialState;
    }
    switch(action.type){
        case "ADD":
        return {
            ...state,
            totalCost: state.totalCost + parseInt(action.productData.price),
            productCart: state.productCart.concat({
                name: action.productData.name,
                price: action.productData.price,
                description: action.productData.description
            })
        }
        default:
        return state
    }
    
}

export default cartReducer