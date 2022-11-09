function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);

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
}