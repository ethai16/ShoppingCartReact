import React from 'react';
import CatalogItem from './CatalogItem'
import '../styles/Catalog.css'

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
        catalogProducts = this.props.productsCatalog.map((product,index) => {
            return <tr><CatalogItem productData = {this.props.productsCatalog[index]} name = {product.name} price = {product.price} description = {product.description}/></tr>
        })
        return (
            <table className = 'table'>
                <tbody>
                    {catalogProducts}
                </tbody>
            </table>
        );
    }
}



export default Catalog
