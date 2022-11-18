function CallEndPointPostCambiarContra(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {



            console.log(data);

            if (data.Codigo === 200) {

                Swal.fire({
                    icon: 'success',
                    title: 'Magnificent',
                    text: 'your password has been renewed',
                }).then((result) => {

                    if(result.isConfirmed){
                        window.location.href = URL_API_BASE;
                        location.replace("signIn.html");
                        location.href = "signIn.html";  
                    }   
                })
            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo cambiar tu contra',
                })

            }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
} 