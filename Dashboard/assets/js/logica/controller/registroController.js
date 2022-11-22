function registrarUsuario() {
    
            const usuario = {

                PrimerNombre: $("#NameRegistro").val(),
                SegundoNombre: "",
                PrimerApellidos: "",
                SegundoApellido: "",
                Sexo: "",
                FechaNacimiento:"",
                TipoDocumento: "",
                Documento: $("#DocumentoRegistro").val(),
                EstadoCivil: "",
                Telefono: $("#PhoneRegistro").val(),
                Celular: $("#PhoneRegistro").val(),
                Direccion: "",
                Correo: $("#CorreoRegistro").val(),
                IdProyecto: "4",
                IdRol: "1",

            }
            
            registro(usuario);
      
}

// function generateHash(string)
// {
        
//     var md = forge.md.sha256.create();  
//         md.start();  
//         md.update(string, "utf8");  
//         var hashText = md.digest().toHex();  
//         return hashText
//         document.getElementById("hashText").innerHTML = hashText;
//     }