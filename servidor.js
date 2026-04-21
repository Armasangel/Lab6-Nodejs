import http from "http"
import fs from "fs/promises"
import path from "path"

const PORT = 3000

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Servidor activo")
    return
  }

  if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "application/json" }) //CORRECION BUG1
    //PARTE 2
    res.end(JSON.stringify({
      mensaje: "Ruta de información del servidor",
      curso: "Sistemas y Tecnologías Web",
      tecnologia: "Node.js"
     }))
    return
  }

  if (req.url === "/api/student") {
    const filePath = path.join(process.cwd(), "datos.json")
    const texto = await fs.readFile(filePath, "utf-8") //CORRECCION BUG2
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(texto))
    return
  }

  //Parte2: nueva ruta de saludo con texto plano
  if (req.url === "/saludo"){
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("HOLA!!! Bienvenido al servidor del lab6!!!")
    return
  }

  //Parte2: nueva ruta con JSON de estado de la api
  if (req.url === "/api/status"){
    res.writeHead(200, {"content-type": "application/json"})
    res.end(JSON.stringify({
      ok: true,
      status: "Servidor en funcionamiento",
      puerto: PORT
    }))
    return
  }

  res.writeHead(404, { "Content-Type": "text/plain" }) //CORRECION BUG5
  res.end(`Ruta no encontrada: ${req.url}`) //CORRECCION BUG3
})

server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3000")
}) //CORRECION BUG4