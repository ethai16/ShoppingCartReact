import React from 'react';
import CatalogItem from './CatalogItem'

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        
    }

    static defaultProps = {
        productsCatalog: [
            {
                name: 'Apples',
                price: '3',
                description: 'red'
            },
            {
                name: 'Banana',
                price: '2',
                description: 'ripe'
            },
            {
                name: 'Pears',
                price: '5',
                description: 'korean'
            }]
    };

    render() {
        let catalogProducts;
        catalogProducts = this.props.productsCatalog.map(product => {
            return <CatalogItem name = {product.name} price ={product.price} description = {product.description}/>
        })
        return (
            <div>
                {catalogProducts}
            </div>
        );
    }
}



export default Catalog
