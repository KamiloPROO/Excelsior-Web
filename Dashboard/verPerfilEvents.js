const perfil = document.getElementById("editarDatos")

console.log("ando en perfil");

perfil.addEventListener("click", function(e){

    Swal.fire({
        icon: 'error',
        title: 'We are in maintenance',
        text: 'Very soon we will have this option',
    })

})


const cambiarContra = document.getElementById("cambiarContra")


let modal = document.querySelectorAll(".modalPerfil")[0];
let modalC = document.querySelectorAll(".modal-containerPerfil")[0];


cambiarContra.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-closePerfil");

});


window.addEventListener("click", function(e){

    if(e.target == modalC){
        modal.classList.toggle("modal-closePerfil");
        setTimeout(() => {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 600);
    }
    
})