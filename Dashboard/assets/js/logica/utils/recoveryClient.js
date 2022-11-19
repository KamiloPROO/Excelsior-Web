function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);

            if (data === null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'The user who entered is not registered',
                })
            } else if (data.Codigo === 200) {

                Swal.fire({
                    icon: 'success',
                    title: 'Magnificent',
                    text: 'please chechk your mail or number phone',
                }).then((result) => {

                    if(result.isConfirmed){
                        window.location.href = URL_API_BASE;
                        location.replace("signIn.html");
                        location.href = "signIn.html";  
                    }   
                })

            } ;
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}