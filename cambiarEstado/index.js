let notas = require("../datos");
let escribirJson = require("../escribirJson");
let eliminarNotas = require("../EliminarNotas");
const guardarTarea = require("../guardarJson");
function modificarDatos(x,y){
 let tarea = notas.find(elemento=> elemento.tarea == x);

   if(tarea != undefined){tarea.estado = y;
    guardarTarea(tarea);
    setTimeout(function(){
        notas.pop();
        escribirJson(notas);
    })}else{console.log("no existe ninguna tarea con ese nombre")}
}
module.exports = modificarDatos
