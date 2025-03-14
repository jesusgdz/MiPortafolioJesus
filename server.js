// Importamos Express
const express = require('express');
const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta actual (para HTML, CSS, JS)
app.use(express.static(__dirname));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
