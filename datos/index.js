let fs = require("fs");
let path = require("path")//tuve que importar path porque __dirname solo no te deja elegir una ruta que este una caprpeta atras, path si.
let notas = JSON.parse(fs.readFileSync(path.join(__dirname + "/../json/data.json")))
module.exports = notas
