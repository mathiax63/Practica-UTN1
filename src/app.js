const express = require("express")
const app = express()
const PORT = 3002
const path = require("path")
app.use(express.static("public"))

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT)
}

);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});
app.get("/Documento", (req, res)=>{
    res.sendFile(path.join(__dirname, './views/Documento.html'))

})
app.get("/externo", (req, res)=>{
    res.sendFile(path.join(__dirname, './views/externo.html'))

})
app.get("/dentroDeArchivo", (req, res)=>{
    res.sendFile(path.join(__dirname, './views/dentroDeArchivo.html'))

})