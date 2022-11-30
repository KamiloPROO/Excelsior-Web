
document.addEventListener('DOMContentLoaded', e => {  

    const contenedorQR = document.getElementById('contenedorQR');
    const adresss = document.getElementById('subimosAdress');

    $.ajax({
        type: "GET",
        url: "https://excelsiortrader.app/api/CuentaTron/GetAddressRandom",
        data: "",
        success: function (data) {

       

        console.log(data);

        if ( data === null){
            location.reload()
        }else{

            const QR = new QRCode(contenedorQR);
            const addressPasar = data.address;
    
    
            QR.makeCode(data.address);
            setInterval("location.reload()",100000);
    
            localStorage.setItem('codigoAddress', addressPasar)
            adresss.textContent = `${data.address}`
        }
        
        

        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
})