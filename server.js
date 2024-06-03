import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const port = 3004;

// Configurar la ruta para servir archivos estáticos del frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor levantado en http://localhost:${port}`);
  });
