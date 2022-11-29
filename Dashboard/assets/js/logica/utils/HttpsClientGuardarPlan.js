function CallEndPointPost1(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                
            console.log(data);

                if (data.Codigo === 500 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'It was not possible to make the investment, insufficient balance',
                      }).then((result) => {
                        if(result.isConfirmed){
                            window.location.href = URL_API_BASE;
                            location.replace("planes.html");
                            location.href ="planes.html";   
                        }   
                    })

                }else{

                    Swal.fire({
                        icon: 'success',
                        title: 'Grandioso',
                        text: 'Has adquirido este plan',
                    }).then((result) => {
                        if(result.isConfirmed){
                            window.location.href = URL_API_BASE;
                            location.replace("Dash.html");
                            location.href ="Dash.html";   
                        }   
                    })

                }
        },  
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}   