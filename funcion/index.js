const notas = require("../datos")
const filtrarPorEstado = require("../filtrarPorEstado");
const guardarTarea = require("../guardarJson");
const eliminarTarea = require("../EliminarNotas");
const cambiarTarea = require("../cambiarEstado");
const array = require("../funcionesDeLaApp");



function hola(x, y, z) {
    switch (x) {
        case "listarfunciones": console.log(array);
        break
        case "listar": notas.forEach(function (elemento) {
            console.log(elemento)
        })
            break
        case "crear": guardarTarea({
            tarea: y,
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
        case undefined: console.log("Atencion - tenes que pasar una accion, abajo te dejo una lista de acciones");
        setTimeout(function(){hola("listarfunciones")}, 3000)
            break

        default: console.log("no entendi que queres hacer, abajo te dejo la lista de acciones");
        setTimeout(function(){hola("listarfunciones")}, 3000)

    }
}

module.exports = hola