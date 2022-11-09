function CrearCuentaTron() {

    var idpersona = localStorage.getItem("idPersona");

    const CuentaTron = {
        
        IdPersona: idpersona,
        
    }
    
    crear(CuentaTron);
   
}