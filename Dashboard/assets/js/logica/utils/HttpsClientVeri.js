function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

                if (data === true ){
                window.location.href = URL_API_BASE;
                location.replace("signIn.html");
                location.href ="signIn.html";
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