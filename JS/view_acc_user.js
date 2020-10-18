const getViewBtn = document.getElementById("btn-view");
getViewBtn.addEventListener("click", () => {
  const getDivDisplayAcc = document.getElementById("display-acc-user");
  getDivDisplayAcc.innerHTML = " ";
  getDivDisplayAcc.innerHTML = `
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Password</th>
                </tr>
              </thead>

              <tbody id="display-content">

              </tbody>
              
            </table>
          `;
  let tbody = document.getElementById("display-content");
  tbody.innerHTML = " ";
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "user") {
      tbody.innerHTML += `
              <tr>
                <td>${users[i].id}</td>
                <td>${users[i].name}</td>
                <td>${users[i].password}</td>
              </tr>
            `;
    }
  }
});
