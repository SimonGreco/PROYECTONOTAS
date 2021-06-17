const notas = require("../datos");
const escribirJson = require("../escribirJson")
function guardarTarea(objeto) {
    notas.push(objeto)
    escribirJson(notas);

}
module.exports = guardarTarea
