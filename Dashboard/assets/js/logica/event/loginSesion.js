// $("#inicioSesion").click(function () {
    const button = document.getElementById("iniciarSesion")
    
    button.addEventListener("click", function(e){
        
        const user = document.getElementById("User").value
        const contrasenia = document.getElementById("Password").value

        if ( user === null || user === "" ){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa Tu Usuario',
                
              })

          } else if ( contrasenia ===  null || contrasenia === "" ){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa Tu Contraseña',
              })

          }else{

            iniciarSesion(); 

          }
    })
  