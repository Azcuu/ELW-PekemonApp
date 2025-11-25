import { Router } from 'express';
import { getAllPokemon, getPokemonById } from '../controllers/pokemons.controllers.js';
import { logRequestParams } from '../middlewares/params-middleware.js';

const router = Router();

router.get('/', logRequestParams, getAllPokemon);

router.get('/:id', logRequestParams, getPokemonById);

export default router;