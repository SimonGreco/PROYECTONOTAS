let notas = require("../datos");
let escribirJson = require("../escribirJson");
function eliminar(datoABusca){
    let notasNoEliminadas = ((
        (notas.filter(function(elemento){
           return  (elemento.tarea != datoABusca) 
           
           
}))
).filter(function(elemento){
    return elemento.estado != datoABusca
}))

notasNoEliminadas.length == notas.length? console.log("no se encontro el elemento que querias eliminar"): escribirJson(notasNoEliminadas);notasNoEliminadas.forEach(function(elemento){console.log(elemento)})


};
module.exports = eliminar;
