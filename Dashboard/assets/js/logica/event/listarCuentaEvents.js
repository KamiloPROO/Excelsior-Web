const button = document.getElementById("crearCuentaTron")

button.addEventListener("click", function(e){

    document.getElementById('crearM').style.display = 'none'
    document.getElementById('cuentaM').style.display = 'block'
    document.getElementById('cuenta').style.display = 'block'

    button.style.display = 'none'

    ListarCuentasTron();
})