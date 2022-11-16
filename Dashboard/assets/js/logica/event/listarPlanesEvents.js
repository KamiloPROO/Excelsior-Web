const button = document.getElementById("listarPlanes2")

const buttonActPlan0 = document.getElementById("activarPlan0")
const buttonActPlan1 = document.getElementById("activarPlan1")
const buttonActPlan2 = document.getElementById("activarPlan2")
const buttonActPlan3 = document.getElementById("activarPlan3")
const buttonActPlan4 = document.getElementById("activarPlan4")
const buttonActPlan5 = document.getElementById("activarPlan5")


// events  btn activar
// button.addEventListener("click", function(e){

//     document.getElementById('plan').style.display = 'flex'
//     document.getElementById('plan1').style.display = 'flex'
//     document.getElementById('plan2').style.display = 'flex'
//     document.getElementById('plan3').style.display = 'flex'
//     document.getElementById('plan4').style.display = 'flex'
//     document.getElementById('plan5').style.display = 'flex'

//     button.style.display = 'none'

//     ListarPlanesInvestor()

// })


// constantes model

const comprarPlan1 = document.getElementById("comprarPlan1")
const comprarPlan2 = document.getElementById("comprarPlan2")
const comprarPlan3 = document.getElementById("comprarPlan3")
const comprarPlan4 = document.getElementById("comprarPlan4")
const comprarPlan5 = document.getElementById("comprarPlan5")
const comprarPlan6 = document.getElementById("comprarPlan6")



// funcionameinto model plan blue
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];


buttonActPlan0.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");

});


window.addEventListener("click", function(e){

    if(e.target == modalC){
        modal.classList.toggle("modal-close");
        setTimeout(() => {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 600);
    }
    
})


// funcionameinto model plan grenn
let modalPlan1 = document.querySelectorAll(".modal-plan1")[0];
let modalCPlan1 = document.querySelectorAll(".modal-container-plan1")[0];


buttonActPlan1.addEventListener("click", function(e){
    e.preventDefault();
    modalCPlan1.style.opacity = "1";
    modalCPlan1.style.visibility = "visible";
    modalPlan1.classList.toggle("modal-close-plan1");

});


window.addEventListener("click", function(e){

    if(e.target == modalCPlan1){
        modalPlan1.classList.toggle("modal-close-plan1");
        setTimeout(() => {
            modalCPlan1.style.opacity = "0";
            modalCPlan1.style.visibility = "hidden";
        }, 600);
    }
    
})

// funcionameinto model plan orange
let modalPlan2 = document.querySelectorAll(".modal-plan2")[0];
let modalCPlan2 = document.querySelectorAll(".modal-container-plan2")[0];


buttonActPlan2.addEventListener("click", function(e){
    e.preventDefault();
    modalCPlan2.style.opacity = "1";
    modalCPlan2.style.visibility = "visible";
    modalPlan2.classList.toggle("modal-close-plan2");
    
});


window.addEventListener("click", function(e){

    if(e.target == modalCPlan2){
        modalPlan2.classList.toggle("modal-close-plan2");
        setTimeout(() => {
            modalCPlan2.style.opacity = "0";
            modalCPlan2.style.visibility = "hidden";
        }, 600);
    }
    
})

// funcionameinto model plan rosa
let modalPlan3 = document.querySelectorAll(".modal-plan3")[0];
let modalCPlan3 = document.querySelectorAll(".modal-container-plan3")[0];


buttonActPlan3.addEventListener("click", function(e){
    e.preventDefault();
    modalCPlan3.style.opacity = "1";
    modalCPlan3.style.visibility = "visible";
    modalPlan3.classList.toggle("modal-close-plan3");

});


window.addEventListener("click", function(e){

    if(e.target == modalCPlan3){
        modalPlan3.classList.toggle("modal-close-plan3");
        setTimeout(() => {
            modalCPlan3.style.opacity = "0";
            modalCPlan3.style.visibility = "hidden";
        }, 600);
    }
    
})

// funcionameinto model plan rojo
let modalPlan4 = document.querySelectorAll(".modal-plan4")[0];
let modalCPlan4 = document.querySelectorAll(".modal-container-plan4")[0];


buttonActPlan4.addEventListener("click", function(e){
    e.preventDefault();
    modalCPlan4.style.opacity = "1";
    modalCPlan4.style.visibility = "visible";
    modalPlan4.classList.toggle("modal-close-plan4");

});


window.addEventListener("click", function(e){

    if(e.target == modalCPlan4){
        modalPlan4.classList.toggle("modal-close-plan4");
        setTimeout(() => {
            modalCPlan4.style.opacity = "0";
            modalCPlan4.style.visibility = "hidden";
        }, 600);
    }
    
})


// funcionameinto model plan rojo
let modalPlan5 = document.querySelectorAll(".modal-plan5")[0];
let modalCPlan5 = document.querySelectorAll(".modal-container-plan5")[0];


buttonActPlan5.addEventListener("click", function(e){
    e.preventDefault();
    modalCPlan5.style.opacity = "1";
    modalCPlan5.style.visibility = "visible";
    modalPlan5.classList.toggle("modal-close-plan5");

});


window.addEventListener("click", function(e){

    if(e.target == modalCPlan5){
        modalPlan5.classList.toggle("modal-close-plan5");
        setTimeout(() => {
            modalCPlan5.style.opacity = "0";
            modalCPlan5.style.visibility = "hidden";
        }, 600);
    }
    
})

//events model

comprarPlan1.addEventListener("click", function(){

    const montoplan1 = document.getElementById("montoOperarPlan0").value


    if (montoplan1 === null || montoplan1 === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',
            
        })

    }else{

        GuardarPlanActivado()
        
    }
    

})

comprarPlan2.addEventListener("click", function(){

    const montoplan1 = document.getElementById("montoOperarPlan1").value


    if (montoplan1 === null || montoplan1 === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',
            
        })

    }else{

        GuardarPlanActivado1()
        
    }

})

comprarPlan3.addEventListener("click", function(){


    const montoplan1 = document.getElementById("montoOperarPlan2").value


    if (montoplan1 === null || montoplan1 === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',
            
        })

    }else{

        GuardarPlanActivado2()
        
    }

})

comprarPlan4.addEventListener("click", function(){


    const montoplan1 = document.getElementById("montoOperarPlan3").value


    if (montoplan1 === null || montoplan1 === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',
            
        })

    }else{

        GuardarPlanActivado3()
        
    }

})

comprarPlan5.addEventListener("click", function(){


    const montoplan1 = document.getElementById("montoOperarPlan4").value


    if (montoplan1 === null || montoplan1 === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',
            
        })

    }else{

        GuardarPlanActivado4()
        
    }

})

comprarPlan6.addEventListener("click", function(){


    const montoplan1 = document.getElementById("montoOperarPlan5").value


    if (montoplan1 === null || montoplan1 === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',
            
        })

    }else{

        GuardarPlanActivado5()
        
    }


})

