import 'dotenv/config';
import express from 'express';
import routePets from './routes/pets.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/pets', routePets);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Active server in port ${PORT}`))
} catch (e) {
    console.log(e);

}