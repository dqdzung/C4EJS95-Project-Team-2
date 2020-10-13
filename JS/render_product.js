
let getElement = document.getElementById("product-list-main")
function renderHTML() {
    getElement.innerHTML = " ";
    for (let i = 0; i < products.length; i++) {
        // let {name, price} = products[i];
        // console.log(name);
        getElement.innerHTML += `
        <div class="product-container" >
            <img alt="img" width="" height="">
            <p class="name-product">${products[i].name}</p>
            <p class="price-product">${products[i].price}</p>
            <button><span><i class="fa fa-shopping-cart"></i></span> Add to cart</button>
        </div>
        `
    }
}
renderHTML();   