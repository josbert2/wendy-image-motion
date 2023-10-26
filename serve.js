const express = require('express');
const app = express();
const PORT = 3000;

// Sirve archivos estáticos desde el directorio actual
app.use(express.static('.'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});