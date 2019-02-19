function addProduct(item){
    return {
        type: 'ADD',
        productData: {
            name:item.name,
            price:item.price,
            description:item.description
        }
    }
}

export default addProduct