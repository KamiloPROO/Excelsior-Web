function verificacionPersonaSend() {

    var loginn = localStorage.getItem("celUser")
    var IdUser = localStorage.getItem("idPersona")

    const usuario = {

        IdPerson: IdUser,
        IdProject: "4",
        CodeVerification: $("#VerifyCode2Send").val(),
        Login: loginn,
        IsRecoverPassword: "true"
       
    }
    verificar(usuario)

}