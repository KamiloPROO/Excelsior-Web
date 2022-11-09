function ListarCuentasTron() {

    var idpersona = localStorage.getItem("idPersona");

    const CuentaTron = {
        
        IdPersona: idpersona,
        
    }
    
    listar(CuentaTron);
   
}