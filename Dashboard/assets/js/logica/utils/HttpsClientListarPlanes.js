
document.addEventListener('DOMContentLoaded', e => {

    $.ajax({
        type: "GET",
        url: "https://excelsiortrader.app/api/TiposMembresia/ListarTiposMembresia",
        data: "",
        success: function (data) {


            console.log(data);

          //plan
            const nomPlan0 = document.getElementById('nomPlan0');
            const saldoIniPlan0 = document.getElementById('saldoIniPlan0');
            const saldoFinPlan0 = document.getElementById('saldoFinPlan0');
            const renPlan0 = document.getElementById('rendimiento0');
            const feePlan0 = document.getElementById('feePlan0');

            const nomPlan1 = document.getElementById('nomPlan1');
            const saldoIniPlan1 = document.getElementById('saldoIniPlan1');
            const saldoFinPlan1 = document.getElementById('saldoFinPlan1');
            const renPlan1 = document.getElementById('rendimiento1');
            const feePlan1 = document.getElementById('feePlan1');

            const nomPlan2 = document.getElementById('nomPlan2');
            const saldoIniPlan2 = document.getElementById('saldoIniPlan2');
            const saldoFinPlan2 = document.getElementById('saldoFinPlan2');
            const renPlan2 = document.getElementById('rendimiento2');
            const feePlan2 = document.getElementById('feePlan2');

            const nomPlan3 = document.getElementById('nomPlan3');
            const saldoIniPlan3 = document.getElementById('saldoIniPlan3');
            const saldoFinPlan3 = document.getElementById('saldoFinPlan3');
            const renPlan3 = document.getElementById('rendimiento3');
            const feePlan3 = document.getElementById('feePlan3');

            const nomPlan4 = document.getElementById('nomPlan4');
            const saldoIniPlan4 = document.getElementById('saldoIniPlan4');
            const saldoFinPlan4 = document.getElementById('saldoFinPlan4');
            const renPlan4 = document.getElementById('rendimiento4');
            const feePlan4 = document.getElementById('feePlan4');

            const nomPlan5 = document.getElementById('nomPlan5');
            const saldoIniPlan5 = document.getElementById('saldoIniPlan5');
            const saldoFinPlan5 = document.getElementById('saldoFinPlan5');
            const renPlan5 = document.getElementById('rendimiento5');
            const feePlan5 = document.getElementById('feePlan5');
           

            nomPlan0.textContent = `${data[0].Descripcion}`
            saldoIniPlan0.textContent = `${data[0].RangoInicial}`
            saldoFinPlan0.textContent = `${data[0].RangoFinal}`
            renPlan0.textContent = `${data[0].Rendimiento}`
            feePlan0.textContent = `${data[0].Fee}`

            nomPlan1.textContent = `${data[1].Descripcion}`
            saldoIniPlan1.textContent = `${data[1].RangoInicial}`
            saldoFinPlan1.textContent = `${data[1].RangoFinal}`
            renPlan1.textContent = `${data[1].Rendimiento}`
            feePlan1.textContent = `${data[1].Fee}`

            nomPlan2.textContent = `${data[2].Descripcion}`
            saldoIniPlan2.textContent = `${data[2].RangoInicial}`
            saldoFinPlan2.textContent = `${data[2].RangoFinal}`
            renPlan2.textContent = `${data[2].Rendimiento}`
            feePlan2.textContent = `${data[2].Fee}`

            nomPlan3.textContent = `${data[3].Descripcion}`
            saldoIniPlan3.textContent = `${data[3].RangoInicial}`
            saldoFinPlan3.textContent = `${data[3].RangoFinal}`
            renPlan3.textContent = `${data[3].Rendimiento}`
            feePlan3.textContent = `${data[3].Fee}`

            nomPlan4.textContent = `${data[4].Descripcion}`
            saldoIniPlan4.textContent = `${data[4].RangoInicial}`
            saldoFinPlan4.textContent = `${data[4].RangoFinal}`
            renPlan4.textContent = `${data[4].Rendimiento}`
            feePlan4.textContent = `${data[4].Fee}`

            nomPlan5.textContent = `${data[5].Descripcion}`
            saldoIniPlan5.textContent = `${data[5].RangoInicial}`
            saldoFinPlan5.textContent = `${data[5].RangoFinal}`
            renPlan5.textContent = `${data[5].Rendimiento}`
            feePlan5.textContent = `${data[5].Fee}`

            //comprar plan blue

            const ComPlan0 = document.getElementById('comPlan0');
            const ComSaldoIniPlan0 = document.getElementById('comsaldoIniPlan0');
            const ComSaldoFinPlan0 = document.getElementById('comsaldoFinPlan0');
            const ComRenPlan0 = document.getElementById('comrendimiento0');
            const ComFeePlan0 = document.getElementById('comfeePlan0');

            const idPlan0 = data[0].Id

            localStorage.setItem("idPlan0",idPlan0);
            ComPlan0.textContent = `${data[0].Descripcion}`
            ComSaldoIniPlan0.textContent = `${data[0].RangoInicial}`
            ComSaldoFinPlan0.textContent = `${data[0].RangoFinal}`
            ComRenPlan0.textContent = `${data[0].Rendimiento}`
            ComFeePlan0.textContent = `${data[0].Fee}`

            //comprar plan green

            const ComPlan1 = document.getElementById('comPlan1');
            const ComSaldoIniPlan1 = document.getElementById('comsaldoIniPlan1');
            const ComSaldoFinPlan1 = document.getElementById('comsaldoFinPlan1');
            const ComRenPlan1 = document.getElementById('comrendimiento1');
            const ComFeePlan1 = document.getElementById('comfeePlan1');

            const idPlan1 = data[1].Id

            localStorage.setItem("idPlan1",idPlan1);
            ComPlan1.textContent = `${data[1].Descripcion}`
            ComSaldoIniPlan1.textContent = `${data[1].RangoInicial}`
            ComSaldoFinPlan1.textContent = `${data[1].RangoFinal}`
            ComRenPlan1.textContent = `${data[1].Rendimiento}`
            ComFeePlan1.textContent = `${data[1].Fee}`

            //comprar plan orange
            const idPlan2 = data[2].Id

            localStorage.setItem("idPlan2",idPlan2);
            const ComPlan2 = document.getElementById('comPlan2');
            const ComSaldoIniPlan2 = document.getElementById('comsaldoIniPlan2');
            const ComSaldoFinPlan2 = document.getElementById('comsaldoFinPlan2');
            const ComRenPlan2 = document.getElementById('comrendimiento2');
            const ComFeePlan2 = document.getElementById('comfeePlan2');

            ComPlan2.textContent = `${data[2].Descripcion}`
            ComSaldoIniPlan2.textContent = `${data[2].RangoInicial}`
            ComSaldoFinPlan2.textContent = `${data[2].RangoFinal}`
            ComRenPlan2.textContent = `${data[2].Rendimiento}`
            ComFeePlan2.textContent = `${data[2].Fee}`

            //comprar plan rosa

            const idPlan3 = data[3].Id

            localStorage.setItem("idPlan3",idPlan3);
            const ComPlan3 = document.getElementById('comPlan3');
            const ComSaldoIniPlan3 = document.getElementById('comsaldoIniPlan3');
            const ComSaldoFinPlan3 = document.getElementById('comsaldoFinPlan3');
            const ComRenPlan3 = document.getElementById('comrendimiento3');
            const ComFeePlan3 = document.getElementById('comfeePlan3');

            ComPlan3.textContent = `${data[3].Descripcion}`
            ComSaldoIniPlan3.textContent = `${data[3].RangoInicial}`
            ComSaldoFinPlan3.textContent = `${data[3].RangoFinal}`
            ComRenPlan3.textContent = `${data[3].Rendimiento}`
            ComFeePlan3.textContent = `${data[3].Fee}`
  
            //comprar plan rojo

            const idPlan4 = data[4].Id

            localStorage.setItem("idPlan4",idPlan4);
            const ComPlan4 = document.getElementById('comPlan4');
            const ComSaldoIniPlan4 = document.getElementById('comsaldoIniPlan4');
            const ComSaldoFinPlan4 = document.getElementById('comsaldoFinPlan4');
            const ComRenPlan4 = document.getElementById('comrendimiento4');
            const ComFeePlan4 = document.getElementById('comfeePlan4');

            ComPlan4.textContent = `${data[4].Descripcion}`
            ComSaldoIniPlan4.textContent = `${data[4].RangoInicial}`
            ComSaldoFinPlan4.textContent = `${data[4].RangoFinal}`
            ComRenPlan4.textContent = `${data[4].Rendimiento}`
            ComFeePlan4.textContent = `${data[4].Fee}`


            //comprar plan aqua

            const idPlan5 = data[5].Id

            localStorage.setItem("idPlan5",idPlan5);
            const ComPlan5 = document.getElementById('comPlan5');
            const ComSaldoIniPlan5 = document.getElementById('comsaldoIniPlan5');
            const ComSaldoFinPlan5 = document.getElementById('comsaldoFinPlan5');
            const ComRenPlan5 = document.getElementById('comrendimiento5');
            const ComFeePlan5 = document.getElementById('comfeePlan5');

            ComPlan5.textContent = `${data[5].Descripcion}`
            ComSaldoIniPlan5.textContent = `${data[5].RangoInicial}`
            ComSaldoFinPlan5.textContent = `${data[5].RangoFinal}`
            ComRenPlan5.textContent = `${data[5].Rendimiento}`
            ComFeePlan5.textContent = `${data[5].Fee}`
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });


})



