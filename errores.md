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