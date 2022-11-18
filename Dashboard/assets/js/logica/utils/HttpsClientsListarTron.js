
document.addEventListener('DOMContentLoaded', e => {
    // alert("hoghohoh")
    // function CallEndPointPost(url, jsonArgs) {
    var idpersona = localStorage.getItem("idPersona");

    $.ajax({
        type: "POST",
        url: "https://excelsiortrader.app/api/CuentaTron/ListarCuentasTron",
        data: { "IdPersona": idpersona },
        success: function (data) {

            console.log(data.Id);

            if (data.Id != 0.0) {

                const respu = document.getElementById('respuestaReferencia');
                const respu2 = document.getElementById('respuestaSaldoUSDT')
                const respu3 = document.getElementById('respuestaSaldoTRX')
                const respu4 = document.getElementById('respuestaCreada')
                const respu5 = document.getElementById('respuestaActualizada')


                respu.textContent = `${data.Referencia}`
                respu2.textContent = `${data.SaldoUSDT}`
                respu3.textContent = `${data.SaldoTRX}`
                respu4.textContent = `${data.FechaCreacion}`
                respu5.textContent = `${data.FechaActulizacion}`

                // const btn = document.getElementById("crearCuentaTron")
                document.getElementById('containerCardTron').classList.toggle("camiloOcultar")


            } else {
                document.getElementById('crearCuentaTron2').classList.toggle("camiloOcultar")
                document.getElementById('crearCuentaTron2').classList.toggle("camilo")

            }

            // if (data.IsActivo === true){

            //     window.location.href = URL_API_BASE;
            //     location.replace("Wallet.html");
            //     location.href ="Wallet.html";

            //   }else{
            //     Swal.fire({
            //       icon: 'error',
            //       title: 'Oops...',
            //       text: 'No tienes una cuenta Activa',
            //     })
            //   };
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
    // }
})

