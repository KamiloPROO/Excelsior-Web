document.addEventListener('DOMContentLoaded', e => {

    const contenedorQR = document.getElementById('contenedorQR');
    const adresss = document.getElementById('subimosAdress');
    // var idpersona = localStorage.getItem("idPersona");

    $.ajax({
        type: "GET",
        url: "https://excelsiortrader.app/api/CuentaTron/GetAddressRandom",
        data: "",
        success: function (data) {

        console.log(data);
        
        const QR = new QRCode(contenedorQR);


        QR.makeCode(data.address);


        adresss.textContent = `${data.address}`

        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });








})