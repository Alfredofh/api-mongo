import express from 'express';
import routePets from './routes/pets.js';

const app = express();

app.use('/pets', routePets);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`))
} catch (e) {
    console.log(e);

}