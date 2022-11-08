import axios from "axios";


function IngresarUsuarios(){

axios.post(URL_API_BASE).then((Response) =>{
 
}).catch((e) =>{
    console.log("Error sesion=> ",e);
})


document.getElementById("iniciarSesion").onclick = function(){
    alert("¡Me has pulsado!");
}

}