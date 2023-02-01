
document.addEventListener('DOMContentLoaded', e => {

  var idpersona = localStorage.getItem("idPersona");

  if (idpersona === "" || idpersona === null) {

    Swal.fire({
      icon: 'error',
      title: 'Opsss',
      text: 'Primero inicia sesion',
    }).then((result) => {

      if (result.isConfirmed) {
        window.location.href = URL_API_BASE;
        location.replace("signIn.html");
        location.href = "signIn.html";
      }
    })
  }

  const nombre = document.getElementById("name")
  const balanceinvest = document.getElementById("balanceInvest")
 
  var namee = localStorage.getItem("PrimerNombre")

  var resBalnace = localStorage.getItem("balInvest")
  

  nombre.textContent = namee;
  balanceinvest.textContent = resBalnace;
 

  console.log(namee);

  $.ajax({
    type: "POST",
    url: "https://excelsiortrader.app/api/Inversiones/ListarMisInversiones",
    data: { "IdPersona": idpersona },
    success: function (data) {

      console.log(data);

      console.log(data.Data);

      var metaData = data.Data;

      const totalProf = data.TotalProfits;

      const totalPro = document.getElementById("totalProfits");
      totalPro.textContent = totalProf;


      for (const datos of metaData) {

        const productList = document.getElementById("product-list");
        const element = document.createElement("div")


        console.log(namee);

        element.innerHTML += `
       <div class="planess">
       <div class="cardInversion" id="plan2">
          
           <img src="assets/images/GREEN.png" alt="Avatar" style="width:50%"> 
           <div class="">
             <h3 ><b>PROGRESS OF MY PLAN</b></h3>
             <br>
             <h3>Rendimiento Mensual %</h3>
             <h3>${datos.Rendimiento}</h3>
             <br>
             <h3>${datos.RangoInicial}</h3>
             <h3>${datos.RangoFinal}</h3>
             <br>
             <h3>Amount Invested USD</h3>
             <h3 style="color: rgb(7, 220, 23)">${datos.CantInvest}</h3>
           </div>
       
       </div>
     </div>
    `;

        productList.appendChild(element)
      }
    },
    error: function () {
      alert("Ha ocurrido un error, por favor vuelva a intentarlo")
    }
  });


})