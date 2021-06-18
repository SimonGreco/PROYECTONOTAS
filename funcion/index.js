const notas = require("../datos")
const filtrarPorEstado = require("../filtrarPorEstado");
const guardarTarea = require("../guardarJson");
const eliminarTarea = require("../EliminarNotas");
const cambiarTarea = require("../cambiarEstado");
const array = require("../funcionesDeLaApp");
array


function hola(x, y, z) {
    switch (x) {
        case "listarfunciones": array.forEach(function(elemento){console.log(elemento)});
        break
        case "listar": notas.forEach(function (elemento) {
            console.log(elemento)
        })
            break
        case "crear": guardarTarea({
            "tarea": y,
            estado: "en proceso"
        });
        setTimeout(function(){hola("listar")});   
            break
        case "filtrar": filtrarPorEstado(y);
            break
            case "eliminar": eliminarTarea(y);  
            break
            case "cambiarestado": cambiarTarea(y,z);
                            setTimeout(function(){hola("listar")});        
            break
        case undefined: console.log("Atencion - tenes que pasar una accion")
            break

        default: console.log("no entendi que queres hacer")

    }
}

module.exports = hola