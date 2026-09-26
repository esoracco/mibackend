// 1 Importamos los modulos que usamos en la aplicacion
// nativas: modulos que vienen con node.js
const os = require('node:os');
const express = require('express');
const path = require('path');

// 2. Creamos la aplicacion
const app = express();

// asignamos puerto
const PORT = process.env.PORT || 9000;

app.get('/', (peticion, respuesta) => {
    respuesta.send("<h1>Bienvenido a la aplicacion de empanadas</h1>");
});

/// rutas
// get : solicita datos al servidor
app.get('/empanadas', (peticion, respuesta) => {
    respuesta.send("tus empanadas estaran listas en 10 minutos");
});

app.get('/contacto', (peticion, respuesta) => {
    respuesta.send("<h1 style='color: red; text-align: center; margin-top: 20px;'>¡Contactanos Ya!</h1>");
});

// 3. Arrancamos la app
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});