function CallEndPointPostListInver(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

          console.log(data);

          for (const datos of data){

           const productList = document.getElementById("product-list");
           const element = document.createElement("div")

          
           element.innerHTML += `
           <div class="planess">
           <div class="cardInversion" id="plan2">
              
               <img src="assets/images/BLUE.png" alt="Avatar" style="width:50%"> 
               <div class="">
                 <h3 ><b style="color: rgb(10, 82, 236)">PROGRESS OF MY PLAN</b></h3>
                 <br>
                 <h3>Rendimiento Mensual %</h3>
                 <h3>${datos.Rendimiento}</h3>
                 <br>
                 <h3>${datos.RangoInicial}</h3>
                 <h3>${datos.RangoFinal}</h3>
                 <br>
                 <h3>Amount Invested USD</h3>
                 <h3 style="color: rgb(7, 220, 23)">${datos.Cant_invertir}</h3>
               </div>
           
           </div>
         </div>
        `;

        productList.appendChild(element)
}


        //     for ( const datos of data){


        //     console.log(datos.IdEstado);
        //     console.log(datos);


        //      let res = document.querySelector('#response');

        //      res.innerHTML += `
        //      <tr>
          
        //       <td>${datos.Id}</td>
          
        //       <td>${datos.Rendimiento}</td>
          
        //       <td>${datos.RangoInicial}</td>
               
        //       <td>${datos.RangoFinal}</td>

        //       <td>${datos.Cant_invertir}</td>
          
        //     </tr>
             
        //      `;
        //   }
        
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}