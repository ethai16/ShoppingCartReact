import React from 'react';
import {connect} from 'react-redux';
import addProduct from '../actions/addProduct'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}

function mapDispatchToProps(dispatch){
    return{
        onAddProduct: (productData) => dispatch(addProduct(productData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
