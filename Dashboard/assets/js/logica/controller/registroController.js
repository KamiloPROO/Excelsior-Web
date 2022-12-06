function registrarUsuario() {

    const melo = document.getElementById("selectTipDocument").value
    
    if (melo == "Tarjeta de Identidad"){

        const tarjeta = 1

        const usuario = {

            FirstName: $("#NameRegistro").val(),
            SecondName: "",
            FirstSurname:  "",
            SecondSurname: "",
            Sex: "",
            DateOfBirth: "",
            DocumentType: tarjeta,
            Document: $("#DocumentoRegistro").val(),
            MaritalStatus: "",
            Phone: $("#PhoneRegistro").val(),
            CellPhone: $("#PhoneRegistro").val(),
            Direction: "",
            Email: $("#CorreoRegistro").val(),
            IdProject: "4",
            Passworrd: "",
            IdRole: "1",
    
        }
    
        registro(usuario);
        
    }else if (melo == "Cedula de Ciudadania"){

        const cedula = 2;

        const usuario = {

            FirstName: $("#NameRegistro").val(),
            SecondName: "",
            FirstSurname:  "",
            SecondSurname: "",
            Sex: "",
            DateOfBirth: "",
            DocumentType: cedula,
            Document: $("#DocumentoRegistro").val(),
            MaritalStatus: "",
            Phone: $("#PhoneRegistro").val(),
            CellPhone: $("#PhoneRegistro").val(),
            Direction: "",
            Email: $("#CorreoRegistro").val(),
            IdProject: "4",
            Passworrd: "",
            IdRole: "1",
    
        }
    
        registro(usuario);

    }else if ( melo == "Pasaporte"){

        const pasaporte = 3;

        const usuario = {

            FirstName: $("#NameRegistro").val(),
            SecondName: "",
            FirstSurname:  "",
            SecondSurname: "",
            Sex: "",
            DateOfBirth: "",
            DocumentType: pasaporte,
            Document: $("#DocumentoRegistro").val(),
            MaritalStatus: "",
            Phone: $("#PhoneRegistro").val(),
            CellPhone: $("#PhoneRegistro").val(),
            Direction: "",
            Email: $("#CorreoRegistro").val(),
            IdProject: "4",
            Passworrd: "",
            IdRole: "1",
    
        }
    
        registro(usuario);

    }
      
}

