function listarInversion() {

    var idpersona = localStorage.getItem("idPersona");

    const planActivado = {
        
        IdPersona: idpersona,
        
    }
    
    inversion(planActivado);
   
}