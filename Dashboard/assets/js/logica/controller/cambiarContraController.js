function NuevaContrasenia() {

    var idpersona = localStorage.getItem("idPersona");
    var celu = localStorage.getItem("txtPhone");

    const cambiarContrasenia = {
        
        IdPersona: idpersona,
        IdProyecto: 4,
        Login: celu,
        ContraseniaNueva: $("#inputContraNueva").val(),
        
    }
    
    cambiar(cambiarContrasenia);
   
}