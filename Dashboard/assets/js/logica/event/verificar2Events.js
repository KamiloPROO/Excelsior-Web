const btnVerifiacion = document.getElementById("VerifyCodeBtn2"); 


btnVerifiacion.addEventListener('click', () => {

    const PasswordVerificacion = document.getElementById("VerifyCode2Send").value


    if (PasswordVerificacion === null || PasswordVerificacion === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Codigo de Verificación',
        })

    }else {

        verificacionPersonaSend();
    }
})

