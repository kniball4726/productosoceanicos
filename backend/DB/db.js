require('dotenv').config(); // Cargar variables de entorno desde .env
const mysql = require('mysql2/promise'); // Importar la versión con promesas

// Crear una conexión a la base de datos usando un pool para manejar múltiples conexiones
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Función para probar la conexión
const testConnection = async () => {
    try {
        const connection = await pool.getConnection(); // Obtener una conexión del pool
        console.log('Conexión a la base de datos exitosa!');
        connection.release(); // Liberar la conexión de vuelta al pool
    } catch (err) {
        console.error('Error conectando a la base de datos:', err);
    }
};

// Probar la conexión
testConnection();

module.exports = pool; // Exportar el pool de conexiones
