const notas = require("../datos")
const filtrarPorEstado = require("../filtrarPorEstado");
const guardarTarea = require("../guardarJson");


function hola(x, y) {
    switch (x) {
        case "listar": notas.forEach(function (elemento) {
            console.log(elemento)
        })
            break
        case "crear": guardarTarea({
            "tarea": y,
            estado: "en proceso"
        })
            break
        case "filtrar": filtrarPorEstado(y);
            break
        case undefined: console.log("Atencion - tenes que pasar una accion")
            break

        default: console.log("no entendi que queres hacer")

    }
}

module.exports = hola