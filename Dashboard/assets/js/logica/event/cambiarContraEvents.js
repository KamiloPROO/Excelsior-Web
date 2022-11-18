const nueva = document.getElementById("contraNueva")
    
nueva.addEventListener("click", function(e){
    

    const contrasenia = document.getElementById("inputContraNueva").value

    

    if ( contrasenia === null || contrasenia === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter A New Password',
            
          })

      }else{

        NuevaContrasenia(); 

      }
})
