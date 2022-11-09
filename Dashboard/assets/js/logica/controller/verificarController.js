
function verificarCode() {

    var celu = localStorage.getItem("txtPhone");
    
    const usuario = {

        IdPersona: "",
        IdProyecto: 4,
        CodigoVerificacion: $("#VerifyCode").val(),
        Login: celu,

    }
    
    verificar(usuario);

}
