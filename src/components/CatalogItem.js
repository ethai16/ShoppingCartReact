import React from 'react';
import '../styles/CatalogItem.css'
import SimpleModalWrapped from './Modal'

class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <td className = "padding between">
                {this.props.name} 
                <SimpleModalWrapped productData = {this.props.productData} name = {this.props.name} price = {this.props.price} description = {this.props.description}/>
            </td>
        );
    }
}




export default CatalogItem
