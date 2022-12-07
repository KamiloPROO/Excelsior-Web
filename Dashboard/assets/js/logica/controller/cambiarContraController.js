function NuevaContrasenia() {

    var idpersona = localStorage.getItem("idPersona");
    var celu = localStorage.getItem("celularUser");

    const cambiarContrasenia = {
        
        IdPerson: idpersona,
        IdProject: "4",
        Login: celu,
        Password: $("#inputContraNueva").val(),
        
    }
    
    cambiar(cambiarContrasenia);
   
}