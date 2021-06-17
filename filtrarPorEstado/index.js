const notas = require("../datos");
function filtrarPorEstado(estado1) {
    
    let notasFiltradas = notas.filter(function (elemento) {
        return elemento.estado == estado1
    });
    notasFiltradas.forEach(function (element) {
        console.log(element)
    })
}
module.exports = filtrarPorEstado