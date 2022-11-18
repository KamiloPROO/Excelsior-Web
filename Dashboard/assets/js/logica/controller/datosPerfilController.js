function VerDatosPerfil() {

    var idpersona = localStorage.getItem("idPersona");

    const DatosPerfil = {
        
        IdPersona: idpersona,
        
    }
    
    datosPerfil(DatosPerfil);
   
}