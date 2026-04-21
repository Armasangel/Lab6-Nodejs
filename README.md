### Parte 1: Identififacion de errores

Se identificaron 5 erores en el archivo 'servidor-malo.js'. Aquí una lista de ellos.

## Bug 1: Content-type incorrecto en 'info'
El valor del header 'Content-type' estaba escrito con un guion en lugar de una barra diagonal.

---

## Bug 2: 'fs.readFile' sin 'await'
Se llamaba a 'fs.readfile' sin 'await' dentro de una función 'async'. Esto hacia que 'texto' fuera una 'Promise' sin resolver, no el contenido del archivo. 

---

## Bug 3: Paréntesis de cierre faltante en 'http.createServer'
El callback a http.createServer cerraba con un }, pero faltaba el } que cierra la llamada a la función. 

---

### Bug 4: Parentesis de cierre faltante en server.listen
La llamda a 'server.listen(PORT, () => {...}' cerraba el callback con ´} pero le faltaba el ) de cierre de listen.

---

## Bug 5: Código de respuesta 200 en ruta no encontrada

Cuando ninguna ruta coincidía, el servido rrespondía con códito HTTP '200 OK' en lugar de '404 Not Found'.

---

### Parte 2: nuevas funcionalidades
Una vez corredigo el servidor, se agregaron las siguientes nuevas funcionalidades.

## Cambio 1: ruta /info ahora responde con JSON
La ruta '/info' dejó de responder texto plano y ahora devuelve un objeto JSON con al menos 3 propiedades: 'mensaje', 'curso' y 'tecnologia'.

---

## Cambio 2: nueva ruta '/saludo'
Se agregó una ruta que responde con un mensaje de bienvenida en texto plano. 

---

## Cambio 3: nueva ruta /api/status
Se agregó una ruta que responde un JSON con el estado del servidor, incluyendo 'ok', 'status' y 'puerto'.

---

## Cambio 4: resputa 404 muestra la ruta visitada.
El mensaje 404 ahora incluye dinámicamente la ruta que el usuario intentó visitar.

**Ejemplo:** Si el usuario visita '/cosas' el resopndor responde:
```
Ruta no encontrada: /cosas
```

---

## Resumen de rutas del servidor final

| Ruta | Método | Tipo respuesta | Descripción |
|---|---|---|---|
| `/` | GET | `text/plain` | Confirma que el servidor está activo |
| `/info` | GET | `application/json` | Info del curso y tecnología |
| `/saludo` | GET | `text/plain` | Mensaje de bienvenida personalizado |
| `/api/student` | GET | `application/json` | Contenido de `datos.json` |
| `/api/status` | GET | `application/json` | Estado del servidor y puerto |
| `*` | GET | `text/plain` | Error 404 con la ruta visitada |

---

## Cómo ejecutar el servidor

```bash
node servidor.js
```

Luego visitar desde el navegador o con `curl`:

```bash
curl http://localhost:3000/
curl http://localhost:3000/info
curl http://localhost:3000/saludo
curl http://localhost:3000/api/status
curl http://localhost:3000/ruta-inexistente
```