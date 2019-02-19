function cartReducer(state,action){
    if(state === undefined){
        return {
            totalPrice: 0,
            productCart:[]
        }
    }
    switch(action.type){
        case "ADD":
        return {
            ...state,
            totalPrice: state.totalPrice + parseInt(action.productData.price),
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