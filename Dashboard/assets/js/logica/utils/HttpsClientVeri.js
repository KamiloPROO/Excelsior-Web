function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);


            if (data.CodeResponse == 400 ){

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Codigo de verificacion incorrecto',
                  })

            }else if (data.CodeResponse == 200){

                window.location.href = URL_API_BASE;
                location.replace("signIn.html");
                location.href ="signIn.html";

            }
        },  
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}   