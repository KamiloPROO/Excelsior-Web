function iniciarSesion() {
            const usuario = {
                
                IdPersona:"",
                IdProyecto:4,
                Login:$("#User").val(),
                Password: $("#Password").val(),
              
            }
            
            sesion(usuario);
           
}