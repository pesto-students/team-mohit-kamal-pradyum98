let productViews = new WeakMap();
let cartitems = new WeakSet();

const incrementProductViews = (productId) => {
    if(productViews.get(productId)){
        const views = productViews.get(productId) +  1;
        productViews.set(productId, views );
        console.log(`Product ID ${productId.id} is viewed ${views} times`)
    } else {
        productViews.set(productId, 1);
        console.log(`Product ID ${productId.id} is viewed 1 time`)
    }
};
const addToCart = (productId) => {
    if(cartitems.has(productId)){
        console.log('Product already in cart')
    }else {
        cartitems.add(productId);
        console.log('Product added to cart')
    }
};

const productId = {id: 123}

incrementProductViews(productId)
addToCart(productId)

incrementProductViews(productId)
addToCart(productId)

incrementProductViews(productId);