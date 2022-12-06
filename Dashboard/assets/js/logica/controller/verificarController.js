
function verificarCode() {

    var loginn = localStorage.getItem("phoneUser")
    var IdUser = localStorage.getItem("IdUserRegis")

    const usuario = {

        IdPerson: IdUser,
        IdProject: "4",
        CodeVerification: $("#VerifyCode").val(),
        Login: loginn,
        IsRecoverPassword: "false"
    }
    
    verificar(usuario);

}
