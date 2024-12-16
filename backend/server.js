const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./DB/db'); // Importar la conexión a la base de datos
const routes = require("./routes/routes");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// Define tus rutas
app.use('/api', routes); // Montar las rutas

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});
