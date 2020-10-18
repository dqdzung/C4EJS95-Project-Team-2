function showDetail(index) {
    const getDivDetail = document.getElementById("product-detail");
    getDivDetail.innerHTML = "";
    getDivDetail.innerHTML = `
              <div id="product-spec">
                <img alt="img">
                <h3>Thông số kĩ thuật</h3>
                <ul>
                  <li>CPU: ${products[index].spec.cpu.brand} ${products[index].spec.cpu.model}</li>
                  <li>RAM: ${products[index].spec.ram}</li>
                  <li>Storage: ${products[index].spec.storage}</li>
                  <li>VGA: ${products[index].spec.vga}</li>
                  <li>Screen: ${products[index].spec.screen}</li>
                  <li>OS: ${products[index].spec.os}</li>
                  <li>Color: ${products[index].spec.color}</li>
                </ul>
                <button onclick="addCart(event)">Add to cart</button>
              </div>
              <div id="product-description">
                <h3>Mô tả</h3>
                <div>${products[index].description}</div>
              </div>
            `;
}
  
  