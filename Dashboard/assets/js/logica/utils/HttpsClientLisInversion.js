function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

          console.log(data);

          //   console.log(data[0].Id)
          // const button = document.getElementById("crearCuentaTron")

              // if (data.Codigo === 200 ){

              //   ListarCuentasTron();
              //   window.location.href = URL_API_BASE;
              //   location.replace("Wallet.html");
              //   location.href ="Wallet.html";
                

              // }else{
              //   Swal.fire({
              //     icon: 'error',
              //     title: 'Oops...',
              //     text: 'No pudimos crear tu cuenta',
              //   })
              // };
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}