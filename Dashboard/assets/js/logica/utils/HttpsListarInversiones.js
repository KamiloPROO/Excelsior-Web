
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
    const balanceWallet = document.getElementById("saldoWallet")
   
    var namee = localStorage.getItem("PrimerNombre")
  
    var resBalnace = localStorage.getItem("balInvest")
    const saldoWall = localStorage.getItem("saldoWallet")
    
  
    // nombre.textContent = namee;
    // balanceinvest.textContent = resBalnace;
    // balanceWallet.textContent = saldoWall;
   
  
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
  
        const totalPro = document.getElementById("capital");
        totalPro.textContent = totalProf;
  
  
        for (const datos of metaData) {
  
          const productList = document.getElementById("product-list");
          const element = document.createElement("div")
  
  
          console.log(namee);
  
          element.innerHTML += `
          <div class="planessWith">
                <div class="cardInversionWith" id="plan2">

                    <div class="adentro">
                        <h3 style="margin-left: 10%;"><b>PROGRESS OF MY PLAN</b></h3>
                        <br>
                        <h3>Rendimiento Mensual %</h3>
                        <h3>${datos.Rendimiento}</h3>
                        <br>
                        <div style="display: flex; margin-left: 30%;">

                            <div style="display: flex;">
                                <h3>U$:</h3>
                                <h3 style="margin-left: 1%;">${datos.RangoInicial}</h3>
                            </div>
                            <div style="display: flex; margin-left: 20%;">
                                <h3>U$:</h3>
                                <h3 style="margin-left: 1%;">${datos.RangoFinal}</h3>
                            </div>

                        </div>
                        <br>
                        <div style="display: flex; margin-left: 10%;">

                            <div>
                                <h3>Amount Invested USD</h3>
                                <h3 style="color: rgb(7, 220, 23)">${datos.CantInvest}</h3>
                            </div>

                            <div style="margin-left: 10%;">
                                <h3>Profits</h3>
                                <h3 style="color: rgb(7, 220, 23)">${datos.CantBalanceAux}</h3>
                            </div>

                        </div>
                        <br>

                        <button class="btnWith">WITHDRAW</button>
                        <br>
                        <br>
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