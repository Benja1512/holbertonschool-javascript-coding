const express = require('express');
const routes = require('./routes');

const app = express();
const port = 1245;

// Utiliza las rutas definidas en full_server/routes/index.js
app.use('/', routes);

// Inicia el servidor en el puerto 1245
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;

