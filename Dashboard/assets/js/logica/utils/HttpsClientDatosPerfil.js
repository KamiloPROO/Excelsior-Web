document.addEventListener('DOMContentLoaded', e => {

 
    var idpersona = localStorage.getItem("idPersona");

    $.ajax({
        type: "POST",
        url: "https://apiamingenieria.app/api/Persona/BuscarPersonaPorIdPersona",
        data: { "IdPersona": idpersona },
        success: function (data) {

            

                const nom = document.getElementById('nombrePerfil');
                // const apelli = document.getElementById('apellidoPerfil')
                // const naci = document.getElementById('fecha_nacimiento')
                const docu = document.getElementById('tipo_documento')
                const tel = document.getElementById('telefono')
                const telLink = document.getElementById("telefonoLink")
                // const dire = document.getElementById("direccion")


                nom.textContent = `${data.PRIMER_NOMBRE}`
                // apelli.textContent = `${data.PRIMER_APELLIDO}`
                // apelli.textContent = "gomez"
                // naci.textContent = `${data.FECHA_NACIMIENTO}`
                docu.textContent = `${data.DOCUMENTO}`
                tel.textContent = `${data.TELEFONO}`
                telLink.textContent = `${data.TELEFONO}`
                // dire.textContent = `${data.DIRECCION}`


        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });








})