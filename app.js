//Requiero dentro de una contante dependencias a utilizar en el proyecto dentro de app
//Como archivo principal
const express = require("express");
const app= express()
const hbs = require("hbs");
const path = require("path");
const PORT = 4500;

//Manejador de rutas
const routeIndex = require("./routes/index")
const vehiculos = require("./routes/vehiculos")
const marca = require("./routes/marca")
const renaultargentina = require("./routes/renaultargentina")
const historia = require("./routes/historia")



//Uso de rutas 
app.use("/", routeIndex)
app.use("/vehiculos", vehiculos)
app.use("/marca", marca)
app.use("/renaultargentina", renaultargentina)
app.use("/historia", historia)


//seteo motor de plantillas
app.set("view engine", "hbs");
app.set("views " , path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"))
//registro public para los estilos, img y js
app.use(express.static(path.join(__dirname, "public")))

//Ponemos a escuchar el puerto
app.listen(PORT, (err) => {
    err ?
    console.log(err):
    console.log( `servidor corriendo en: http://127.0.0.1:${PORT}` )
});
