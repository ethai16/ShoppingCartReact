import React from 'react';

class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                {this.props.name} {' '} {this.props.price}
            </div>
        );
    }
}




export default CatalogItem
