// $("#inicioSesion").click(function () {
    const button = document.getElementById("VerifyCodeBtn")

    button.addEventListener("click", function(e){

        const codeveri = document.getElementById("VerifyCode").value

        if(codeveri === null || codeveri === "" ){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa Tu Codigo de Verificacion',
              })
                
            }else{
                verificarCode();
        }
    })
  