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


buttonActPlan0.addEventListener("click", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");

});


window.addEventListener("click", function (e) {

    if (e.target == modalC) {
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


buttonActPlan1.addEventListener("click", function (e) {
    e.preventDefault();
    modalCPlan1.style.opacity = "1";
    modalCPlan1.style.visibility = "visible";
    modalPlan1.classList.toggle("modal-close-plan1");

});


window.addEventListener("click", function (e) {

    if (e.target == modalCPlan1) {
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


buttonActPlan2.addEventListener("click", function (e) {
    e.preventDefault();
    modalCPlan2.style.opacity = "1";
    modalCPlan2.style.visibility = "visible";
    modalPlan2.classList.toggle("modal-close-plan2");

});


window.addEventListener("click", function (e) {

    if (e.target == modalCPlan2) {
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


buttonActPlan3.addEventListener("click", function (e) {
    e.preventDefault();
    modalCPlan3.style.opacity = "1";
    modalCPlan3.style.visibility = "visible";
    modalPlan3.classList.toggle("modal-close-plan3");

});


window.addEventListener("click", function (e) {

    if (e.target == modalCPlan3) {
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


buttonActPlan4.addEventListener("click", function (e) {
    e.preventDefault();
    modalCPlan4.style.opacity = "1";
    modalCPlan4.style.visibility = "visible";
    modalPlan4.classList.toggle("modal-close-plan4");

});


window.addEventListener("click", function (e) {

    if (e.target == modalCPlan4) {
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


buttonActPlan5.addEventListener("click", function (e) {
    e.preventDefault();
    modalCPlan5.style.opacity = "1";
    modalCPlan5.style.visibility = "visible";
    modalPlan5.classList.toggle("modal-close-plan5");

});


window.addEventListener("click", function (e) {

    if (e.target == modalCPlan5) {
        modalPlan5.classList.toggle("modal-close-plan5");
        setTimeout(() => {
            modalCPlan5.style.opacity = "0";
            modalCPlan5.style.visibility = "hidden";
        }, 600);
    }

})

//events model

comprarPlan1.addEventListener("click", function () {

    const montoplan1 = document.getElementById("montoOperarPlan0").value
    const saldoMin1 = localStorage.getItem("salMini0")
    const saldoMax1 = localStorage.getItem("salMaxi0")

    console.log("saldo" + montoplan1);

    if (montoplan1 === null || montoplan1 === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',

        })

    }
    // else if (montoplan1 > saldoMin1 || montoplan1 < saldoMax1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir no cumple con el rango de inversion`,

    //     })
        

    // }
    // else if (montoplan1 < saldoMin1){

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es menor a la cantidad minima de inversion (cantidad minima $ ${saldoMin1})`,

    //     })

    // }else if (montoplan1 > saldoMax1){

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es mayor a la cantidad maxima de inversion (cantidad maxima $ ${saldoMax1})`,

    //     })
    // }
    else {

        GuardarPlanActivado()

    }


})

comprarPlan2.addEventListener("click", function () {

    const montoplan1 = document.getElementById("montoOperarPlan1").value
    const saldoMinPlan1 = localStorage.getItem("salMinimo1")
    const saldoMaxPlan1 = localStorage.getItem("salMaximo1")


//   console.log("saldo " + montoplan1);
//   console.log("saldoMin " + saldoMinPlan1);
//   console.log("saldoMax " + saldoMaxPlan1);


    if (montoplan1 === null || montoplan1 === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',

        })

    } 
    // else if (montoplan1 < saldoMinPlan1 || montoplan1 > saldoMaxPlan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir no cumple con el rango de inversion`,

    //     })
        

    // }
    // else if (saldoMin1 > montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es menor a la cantidad minima de inversion (cantidad minima $ ${saldoMin1})`,

    //     })
    // } else if (saldoMax1 < montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es mayor a la cantidad maxima de inversion (cantidad maxima $ ${saldoMax1})`,

    //     })
    // } 
    else {

        GuardarPlanActivado1()
    }

})

comprarPlan3.addEventListener("click", function () {


    const montoplan1 = document.getElementById("montoOperarPlan2").value
    const saldoMin1 = localStorage.getItem("salMini2")
    const saldoMax1 = localStorage.getItem("salMaxi2")


    if (montoplan1 === null || montoplan1 === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',

        })

    } 
    // else if (saldoMin1 > montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es menor a la cantidad minima de inversion (cantidad minima $ ${saldoMin1})`,

    //     })
    // } else if (saldoMax1 < montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es mayor a la cantidad maxima de inversion (cantidad maxima $ ${saldoMax1})`,

    //     })
    // } 
    else {

        GuardarPlanActivado2()

    }

})

comprarPlan4.addEventListener("click", function () {


    const montoplan1 = document.getElementById("montoOperarPlan3").value
    const saldoMin1 = localStorage.getItem("salMini3")
    const saldoMax1 = localStorage.getItem("salMaxi3")


    if (montoplan1 === null || montoplan1 === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',

        })

    } 
    // else if (saldoMin1 > montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es menor a la cantidad minima de inversion (cantidad minima $ ${saldoMin1})`,

    //     })
    // } else if (saldoMax1 < montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es mayor a la cantidad maxima de inversion (cantidad maxima $ ${saldoMax1})`,

    //     })
    // } 
    else {

        GuardarPlanActivado3()

    }

})

comprarPlan5.addEventListener("click", function () {


    const montoplan1 = document.getElementById("montoOperarPlan4").value
    const saldoMin1 = localStorage.getItem("salMini4")
    const saldoMax1 = localStorage.getItem("salMaxi4")


    if (montoplan1 === null || montoplan1 === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',

        })

    } 
    // else if (saldoMin1 > montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es menor a la cantidad minima de inversion (cantidad minima $ ${saldoMin1})`,

    //     })
    // } else if (saldoMax1 < montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es mayor a la cantidad maxima de inversion (cantidad maxima $ ${saldoMax1})`,

    //     })
    // }
     else {

        GuardarPlanActivado4()

    }

})

comprarPlan6.addEventListener("click", function () {


    const montoplan1 = document.getElementById("montoOperarPlan5").value
    const saldoMin1 = localStorage.getItem("salMini5")
    const saldoMax1 = localStorage.getItem("salMaxi5")


    if (montoplan1 === null || montoplan1 === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Primero debes digitar un monto a operar',

        })

    } 
    // else if (saldoMin1 > montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es menor a la cantidad minima de inversion (cantidad minima $ ${saldoMin1})`,

    //     })
    // } else if (saldoMax1 < montoplan1) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: `el saldo a invertir es mayor a la cantidad maxima de inversion (cantidad maxima $ ${saldoMax1})`,

    //     })
    // }
     else {

        GuardarPlanActivado5()
    }


})

