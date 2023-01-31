
document.addEventListener('DOMContentLoaded', e => {

    const contenedorQR = document.getElementById('contenedorQR');
    const adresss = document.getElementById('subimosAdress');
    const referencia = localStorage.getItem("numReferen");

    console.log(referencia);

    const QR = new QRCode(contenedorQR);

    QR.makeCode(referencia);
    setInterval("location.reload()", 100000);

    adresss.textContent = `${referencia}`


    // $.ajax({
    //     type: "GET",
    //     url: "https://excelsiortrader.app/api/CuentaTron/GetAddressRandom",
    //     data: "",
    //     success: function (data) {

    //         console.log(data);

    //         console.log(referencia);

    //         if (data === null) {
    //             location.reload()
    //         } else if (referencia === null) {
    //             location.reload()
    //         } else {

    //             const addressPasar = referencia;
    //             localStorage.setItem('codigoAddress', addressPasar)

    //             const QR = new QRCode(contenedorQR);

    //             QR.makeCode(referencia);
    //             setInterval("location.reload()", 100000);

    //             adresss.textContent = `${referencia}`
    //         }



    //     },
    //     error: function () {
    //         alert("Ha ocurrido un error, por favor vuelva a intentarlo")
    //     }
    // });
})