displayManager = () => {
  let tbody = document.getElementById("display-table");
  tbody.innerHTML = " ";
  for (let i = 0; i < products.length; i++) {
    let { name, model, price, brand, spec, description } = products[i];
    tbody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${model}</td>
            <td>${price}</td>
            <td>${brand}</td>
            <td>${spec.cpu}</td>
            <td>${spec.ram}</td>
            <td>${spec.storage}</td>
            <td>${spec.vga}</td>
            <td>${spec.screen}</td>
            <td>${spec.os}</td>
            <td>${spec.color}</td>
            <td><span style="display: none;">${description}</span><button class="show-btn" onclick="show(event)">Show</button></td>
            <td>
                <button class="btn-update">Update</button><span><button class="btn-del" >Delete</button></span>
            </td>
        </tr>
        `;
  }
  let getDelButtonElement = document.getElementsByClassName("btn-del");
  let delButton = [...getDelButtonElement];
  for (let i = 0; i < delButton.length; i++) {
    delButton[i].addEventListener("click", () => {
      removeProduct(i);
    });
  }
  const getUpdateButtonElement = document.getElementsByClassName("btn-update");
  const updateButton = [...getUpdateButtonElement];
  for (let i = 0; i < updateButton.length; i++) {
    updateButton[i].addEventListener("click", () => {
      updateUI(i);
      products.splice(i, 1);
      let getUpdateBtn = document.getElementsByClassName("update-product");
      getUpdateBtn[0].addEventListener("click", () => {
        let name = document.getElementById("input-name-product").value,
          model = document.getElementById("input-model-product").value,
          price = document.getElementById("input-price-product").value,
          brand = document.getElementById("input-brand-product").value,
          cpu = document.getElementById("input-cpu-product").value,
          ram = document.getElementById("input-ram-product").value,
          storage = document.getElementById("input-storage-product").value,
          vga = document.getElementById("input-vga-product").value,
          screen = document.getElementById("input-screen-product").value,
          os = document.getElementById("input-os-product").value,
          color = document.getElementById("input-color-product").value,
          description = document.getElementById("input-description-product")
            .value;
        let spec = { cpu, ram, storage, vga, screen, os, color };
        let newProduct = { name, model, price, brand, spec, description };
        products.splice(i, 0, newProduct);
        console.log(products);
        displayManager();
      });
    });
  }
};