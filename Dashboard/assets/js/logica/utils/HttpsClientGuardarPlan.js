function CallEndPointPost1(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                
            console.log(data);

                // if (data.status === true ){

                //     window.location.href = URL_API_BASE;
                //     location.replace("Dash.html");
                //     location.href ="Dash.html";

                // }else{

                //     Swal.fire({
                //         icon: 'error',
                //         title: 'Oops...',
                //         text: 'No pudiste activar tu plan',
                //       })

                // }
        },  
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}   