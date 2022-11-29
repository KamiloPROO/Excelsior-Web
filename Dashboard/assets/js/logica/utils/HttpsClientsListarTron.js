
document.addEventListener('DOMContentLoaded', e => {

    var idpersona = localStorage.getItem("idPersona");
    var nomWallet = localStorage.getItem("PrimerNombre");

    $.ajax({
        type: "POST",
        url: "https://excelsiortrader.app/api/Cuenta/GetAccountUser",
        data: { "IdPersona": idpersona },
        success: function (data) {

            console.log(data);

            if (data != null) {

                const respu = document.getElementById('nombreUser');
                const respu2 = document.getElementById('saldoUsdtWallet')
                const respu4 = document.getElementById('fechaCreada')
                const respu5 = document.getElementById('fechaActua')

                respu.textContent = nomWallet
                respu2.textContent = `${data.SaldoVirtual}`
                respu4.textContent = `${data.FechaCreacion}`
                respu5.textContent = `${data.FechaActualizacion}`

                // const btn = document.getElementById("crearCuentaTron")
                // document.getElementById('containerCardTron').classList.toggle("camiloOcultar")
                document.getElementById('containerCardTron').style.display = 'block'


            } else {
                document.getElementById('crearCuentaTron2').classList.toggle("camiloOcultar")
                document.getElementById('crearCuentaTron2').classList.toggle("camilo")

            }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });

})

