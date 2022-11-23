const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler =document.querySelector (".theme-toggler")


//show sidebar//
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
 //close sidebar//
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//change theme//

// themeToggler.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme-variables');

//     themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
//     themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
// })

//fill orders in table

// Orders.forEach(order => {
//     const tr = document.createElement('tr');
//     const trContent = `    
//     <td>${order.productName}</td>
//     <td>${order.productNumber}</td>
//     <td>${order.paymentStatus}</td>
//     <td class="${order.shipping === 'Decline' ?  'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}" > $ {order.shippingStatus}</td>
//     <td class="primary">Details</td>
//         `;

// tr.innerHTML = trContent;
// document.querySelector('table tbody').appendChild(tr);

// })

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data)
}