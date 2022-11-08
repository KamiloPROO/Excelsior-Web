function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

                if (data === true ){
                window.location.href = URL_API_BASE;
                location.replace("Dash.html");
                location.href ="Dash.html";
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Codigo de Verificacion Incorrecto',
                      })
                }
        },  
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}   