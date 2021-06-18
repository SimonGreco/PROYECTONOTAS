let notas = require("../datos");
let escribirJson = require("../escribirJson");
const guardarTarea = require("../guardarJson");
function modificarDatos(y,z){
 let tarea = notas.find(elemento=> elemento.tarea == y);

   if(tarea != undefined){tarea.estado = z;
    guardarTarea(tarea);
    setTimeout(function(){
        notas.pop();
        escribirJson(notas);
    })}else{console.log("no existe ninguna tarea con ese nombre")}
}
module.exports = modificarDatos
