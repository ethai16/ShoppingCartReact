function addProduct(item){
    console.log('In add Product')
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