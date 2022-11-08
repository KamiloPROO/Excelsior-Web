// $("#inicioSesion").click(function () {
    const button = document.getElementById("RegistrarUsuario")

    button.addEventListener("click", function(e){
        const nombre = document.getElementById("NameRegistro").value
        const celular = document.getElementById("PhoneRegistro").value
        const correo = document.getElementById("CorreoRegistro").value
        const documento = document.getElementById("DocumentoRegistro").value

        localStorage.setItem("txtPhone",celular);
        
        if (nombre === null || nombre === ""){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa Tu Nombre',
              })

        } else if (celular === null || celular === ""){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa Tu Numero de celular',
              })

        }else if (correo === null || correo === ""){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa Tu Correo Electronico',
              })

        }else if (documento === null || documento === ""){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa Tu Documento de Identidad',
              })

        }else {
            registrarUsuario();
        }

    })
    