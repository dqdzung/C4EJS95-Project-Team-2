//hien thi bang edit
displayManager = () => {
    // lay button voi id la manage-inventory   
    let getDivElement = document.getElementById('manage-inventory');
    getDivElement.innerHTML = `
    <div id="edit-product">
        <input id="input-name-product" type="text" placeholder="Enter name">
        <input id="input-model-product" type="text" placeholder="enter model">
        <input id="input-price-product" type="text" placeholder="enter price">
        <input id="input-brand-product" type="text" placeholder="enter brand">
        <input id="input-spec-product" type="text" placeholder="enter spec">
        <input id="input-description-product" type="text" placeholder="enter description">
        <button class="add-product" onclick="addProduct()">Add</button>
    </div>
        <table border="1px black">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Brand</th>
                    <th>Spec</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="display-table">
                
            </tbody>
        </table>
    `;
    let tbody = document.getElementById('display-table')
    tbody.innerHTML = " ";
    for (let i = 0; i < products.length; i++) {
        let {name, model, price, brand, spec, description} = products[i];
        tbody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${model}</td>
            <td>${price}</td>
            <td>${brand}</td>
            <td>${spec}</td>
            <td>${description}</td>
            <td>
                <button class="btn-update">Update</button><span><button class="btn-del" >Delete</button></span>
            </td>
        </tr>
        `;
    }
    let getDelButtonElement = document.getElementsByClassName('btn-del');
    let delButton = [...getDelButtonElement];
    for (let i = 0; i < delButton.length; i++) {
        delButton[i].addEventListener('click', () =>{
            removeProduct(i);
        })
        
    }
    let getUpdateButtonElement = document.getElementsByClassName('btn-update');
    let updateButton = [...getUpdateButtonElement];
    for (let i = 0; i < updateButton.length; i++) {
        updateButton[i].addEventListener('click', () =>{    
            update(i);
            products.splice(i , 1);
            console.log(products);
            //displayManager();
            //displayBodyOfTable();
        })
        
    }
}

//them san pham
addProduct = () => {
    
    // console.log(name);
    let name = document.getElementById('input-name-product').value,
        model = document.getElementById('input-model-product').value,
        price = document.getElementById('input-price-product').value,
        brand = document.getElementById('input-brand-product').value,
        spec = document.getElementById('input-spec-product').value,
        description= document.getElementById('input-description-product').value;
    products.push({name, model, price, brand, spec, description});
    console.log(products);
    displayManager();
}

function removeProduct(index) {
    products.splice(index,1);
    displayManager()
}
function update(index) {
    //update UI
    let getDivEdit = document.getElementById('edit-product');
    getDivEdit.innerHTML = " ";
    getDivEdit.innerHTML = `
    <input id="input-name-product" type="text" placeholder="Enter name">
    <input id="input-model-product" type="text" placeholder="enter model">
    <input id="input-price-product" type="text" placeholder="enter price">
    <input id="input-brand-product" type="text" placeholder="enter brand">
    <input id="input-spec-product" type="text" placeholder="enter spec">
    <input id="input-description-product" type="text" placeholder="enter description">
    <button class="update-product" onclick="addProduct()">Update</button>
    `;
    
    let {name, model, price, brand, spec, description} = products[index];
    document.getElementById('input-name-product').value = name;
    document.getElementById('input-model-product').value = model;
    document.getElementById('input-price-product').value = price;
    document.getElementById('input-brand-product').value = brand;
    document.getElementById('input-spec-product').value = spec;
    document.getElementById('input-description-product').value = description;      
}