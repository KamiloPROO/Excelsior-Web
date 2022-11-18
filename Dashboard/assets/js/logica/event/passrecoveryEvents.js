const recovey = document.getElementById("recoveryContrasenia")


recovey.addEventListener("click", function(e){

    const userr = document.getElementById("recoveryUserio").value
    const correoo = document.getElementById("recoveryEmailContra").value

    if ( userr === null || userr === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Usuario',
            
          })

      } else if ( correoo ===  null || correoo === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Correo',
          })

      }else{

        passRecovery(); 

      }

    

})
