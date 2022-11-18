const button = document.getElementById("recoveryContrasenia")

button.addEventListener("click" ,function() {

    const correoRec = document.getElementById("recoveryEmailContra").value
    const celularRec = document.getElementById("recoveryUserio").value

    if (correoRec === null || correoRec === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Correo',
          })

    }else if (celularRec === null || celularRec === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu User',
          })

    }else {

        
        RecoveryContraseniaIndex();
    }
})