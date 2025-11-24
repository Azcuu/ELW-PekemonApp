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

// Endpoint para lista de pokemons
app.get('/api/pokemons', async (req, res) => {
  try {
    // Por ahora llamamos a PokeAPI
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    res.json(data); // Devuelve los resultados directamente
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener pokemons' });
  }
});

// Endpoint para detalle de un pokemon
app.get('/api/pokemons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener detalle del pokemon' });
  }
});

app.listen(port, () => {
  console.log(`PokeApp backend running at http://localhost:${port}`);
});