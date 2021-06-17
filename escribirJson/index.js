const fs = require("fs");
const path = require("path");
function escribirJson(arrayDeTareas) {
    let textoModificado = JSON.stringify(arrayDeTareas);
    fs.writeFileSync((path.join(__dirname + "/../json/data.json")), textoModificado)
}
module.exports = escribirJson


