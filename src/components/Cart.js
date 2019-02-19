import React from 'react';
import {connect} from 'react-redux';
import addProduct from '../actions/addProduct'
import '../styles/Cart.css'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        var cart = this.props.productCart.map(product =>{
           return <div>{product.name}</div>
        })
        return (
            <div className = "parentPosition">
                {cart}
                <div className = "totalBottom">
                    Total Cost: {this.props.totalCost}
                </div>

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
