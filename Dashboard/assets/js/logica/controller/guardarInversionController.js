function GuardarPlanActivado() {

    var idpersona = localStorage.getItem("idPersona");

    var idPlan = localStorage.getItem("idPlan0");

    console.log(idPlan);


    const GuardarPlan = {
        
        IdPlan: idPlan,
        IdPerson: idpersona,
        InvestedAmount: $("#montoOperarPlan0").val(),
        address: "",
        DateInvest: ""
    }

    guardar(GuardarPlan);
   
}

function GuardarPlanActivado1() {

    var idpersona = localStorage.getItem("idPersona");

    var idPlan = localStorage.getItem("idPlan1");

    console.log(idPlan);
    const GuardarPlan = {
        
        IdPlan: idPlan,
        IdPerson: idpersona,
        InvestedAmount: $("#montoOperarPlan1").val(),
        address: "",
        DateInvest: ""
    }

    guardar(GuardarPlan);
   
}

function GuardarPlanActivado2() {

    var idpersona = localStorage.getItem("idPersona");

    var idPlan = localStorage.getItem("idPlan2");

    console.log(idPlan);
    const GuardarPlan = {
        
        IdPlan: idPlan,
        IdPerson: idpersona,
        InvestedAmount: $("#montoOperarPlan2").val(),
        address: "",
        DateInvest: ""
    }

    guardar(GuardarPlan);
   
}

function GuardarPlanActivado3() {

    var idpersona = localStorage.getItem("idPersona");

    var idPlan = localStorage.getItem("idPlan3");

    console.log(idPlan);
    const GuardarPlan = {
        
        IdPlan: idPlan,
        IdPerson: idpersona,
        InvestedAmount: $("#montoOperarPlan3").val(),
        address: "",
        DateInvest: ""
    }

    guardar(GuardarPlan);
   
}

function GuardarPlanActivado4() {

    var idpersona = localStorage.getItem("idPersona");

    var idPlan = localStorage.getItem("idPlan4");

    console.log(idPlan);
    const GuardarPlan = {
        
        IdPlan: idPlan,
        IdPerson: idpersona,
        InvestedAmount: $("#montoOperarPlan4").val(),
        address: "",
        DateInvest: ""
    }

    guardar(GuardarPlan);
   
}

function GuardarPlanActivado5() {

    var idpersona = localStorage.getItem("idPersona");

    var idPlan = localStorage.getItem("idPlan5");
    console.log(idPlan);

    const GuardarPlan = {
        
        IdPlan: idPlan,
        IdPerson: idpersona,
        InvestedAmount: $("#montoOperarPlan5").val(),
        address: "",
        DateInvest: ""
    }

    guardar(GuardarPlan);
   
}