
function crearCuentaTronDirecta() {

    var idpersona = localStorage.getItem("idPersona");
    var nomUser = localStorage.getItem("PrimerNombre");
    var celUser = localStorage.getItem("celularUser");

    $.ajax({
        type: "POST",
        url: "https://excelsiortrader.app/api/Cuenta/StoreNewAccountUser",
        data: { "Referencia": "", "NombrePersona":  nomUser, "Telefono": celUser, "IdUsuario": idpersona, "EstadoActivo": "true", "FechaCreacion": "", "FechaActualizacion": "", "SaldoVirtual":"" },
        success: function (data) {

            console.log(data);

            if (data.Codigo === 200) {

                window.location.href = URL_API_BASE;
                location.replace("Wallet.html");
                location.href = "Wallet.html";


            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No pudimos crear tu cuenta',
                })
            };


        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });

}



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

                const referen = data.Referencia;
                const balanInvest = data.BalanceInvest;
                const saldoVirtual = data.SaldoVirtual;

                localStorage.setItem("numReferen", referen);
                localStorage.setItem("balInvest", balanInvest);
                localStorage.setItem("saldoWallet", saldoVirtual);


                respu.textContent = nomWallet
                respu2.textContent = `${data.SaldoVirtual}`
                respu4.textContent = `${data.FechaCreacion}`
                respu5.textContent = `${data.FechaActualizacion}`

                // const btn = document.getElementById("crearCuentaTron")
                // document.getElementById('containerCardTron').classList.toggle("camiloOcultar")
                document.getElementById('containerCardTron').style.display = 'block'


            } else {

                // document.getElementById('crearCuentaTron2').classList.toggle("camiloOcultar")
                // document.getElementById('crearCuentaTron2').classList.toggle("camilo")

                crearCuentaTronDirecta()

            }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });

})

