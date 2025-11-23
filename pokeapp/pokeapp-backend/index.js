import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pokeappRouter from './routes/pokeapp.routes.js';
import pokedexRouter from './routes/pokedex.routes.js';
import pokedleRouter from './routes/pokedle.routes.js';
import teamsRouter from './routes/teams.routes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', pokeappRouter);
app.use('/pokedex', pokedexRouter);
app.use('/pokedle', pokedleRouter);
app.use('/teams', teamsRouter);


app.listen(port, () => {
  console.log(`PokeApp backend running at http://localhost:${port}`);
});