function CrearCuentaTron() {

    var idpersona = localStorage.getItem("idPersona");
    var nomUser = localStorage.getItem("PrimerNombre");
    var celUser = localStorage.getItem("celularUser");

    const CuentaTron = {
        
        Referencia: "",
        NombrePersona: nomUser,
        Telefono:celUser,
        IdUsuario: idpersona,
        EstadoActivo:"true",
        FechaCreacion:"",
        FechaActualizacion:"",
        SaldoVirtual:""

    }
    
    crear(CuentaTron);
   
}