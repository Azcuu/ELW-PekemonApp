export function getAllDBPokemon() {
  return pokemons;
}

export function getDBPokemonById(id) {
  return pokemons.find(pokemon => pokemon.id === id);
}

const pokemons = [
  {
    "id": 1,
    "name": "bulbasaur",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "types": ["grass", "poison"],
    "abilities": ["overgrow", "chlorophyll"],
    "stats": [
      { "name": "hp", "value": 45 },
      { "name": "attack", "value": 49 },
      { "name": "defense", "value": 49 },
      { "name": "special-attack", "value": 65 },
      { "name": "special-defense", "value": 65 },
      { "name": "speed", "value": 45 }
    ]
  },
  {
    "id": 2,
    "name": "ivysaur",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "types": ["grass", "poison"],
    "abilities": ["overgrow", "chlorophyll"],
    "stats": [
      { "name": "hp", "value": 60 },
      { "name": "attack", "value": 62 },
      { "name": "defense", "value": 63 },
      { "name": "special-attack", "value": 80 },
      { "name": "special-defense", "value": 80 },
      { "name": "speed", "value": 60 }
    ]
  },
  {
    "id": 3,
    "name": "venusaur",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "types": ["grass", "poison"],
    "abilities": ["overgrow", "chlorophyll"],
    "stats": [
      { "name": "hp", "value": 80 },
      { "name": "attack", "value": 82 },
      { "name": "defense", "value": 83 },
      { "name": "special-attack", "value": 100 },
      { "name": "special-defense", "value": 100 },
      { "name": "speed", "value": 80 }
    ]
  },
  {
    "id": 4,
    "name": "charmander",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "types": ["fire"],
    "abilities": ["blaze", "solar-power"],
    "stats": [
      { "name": "hp", "value": 39 },
      { "name": "attack", "value": 52 },
      { "name": "defense", "value": 43 },
      { "name": "special-attack", "value": 60 },
      { "name": "special-defense", "value": 50 },
      { "name": "speed", "value": 65 }
    ]
  },
  {
    "id": 5,
    "name": "charmeleon",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "types": ["fire"],
    "abilities": ["blaze", "solar-power"],
    "stats": [
      { "name": "hp", "value": 58 },
      { "name": "attack", "value": 64 },
      { "name": "defense", "value": 58 },
      { "name": "special-attack", "value": 80 },
      { "name": "special-defense", "value": 65 },
      { "name": "speed", "value": 80 }
    ]
  },
  {
    "id": 6,
    "name": "charizard",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "types": ["fire", "flying"],
    "abilities": ["blaze", "solar-power"],
    "stats": [
      { "name": "hp", "value": 78 },
      { "name": "attack", "value": 84 },
      { "name": "defense", "value": 78 },
      { "name": "special-attack", "value": 109 },
      { "name": "special-defense", "value": 85 },
      { "name": "speed", "value": 100 }
    ]
  },
  {
    "id": 7,
    "name": "squirtle",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "types": ["water"],
    "abilities": ["torrent", "rain-dish"],
    "stats": [
      { "name": "hp", "value": 44 },
      { "name": "attack", "value": 48 },
      { "name": "defense", "value": 65 },
      { "name": "special-attack", "value": 50 },
      { "name": "special-defense", "value": 64 },
      { "name": "speed", "value": 43 }
    ]
  },
  {
    "id": 8,
    "name": "wartortle",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "types": ["water"],
    "abilities": ["torrent", "rain-dish"],
    "stats": [
      { "name": "hp", "value": 59 },
      { "name": "attack", "value": 63 },
      { "name": "defense", "value": 80 },
      { "name": "special-attack", "value": 65 },
      { "name": "special-defense", "value": 80 },
      { "name": "speed", "value": 58 }
    ]
  },
  {
    "id": 9,
    "name": "blastoise",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "types": ["water"],
    "abilities": ["torrent", "rain-dish"],
    "stats": [
      { "name": "hp", "value": 79 },
      { "name": "attack", "value": 83 },
      { "name": "defense", "value": 100 },
      { "name": "special-attack", "value": 85 },
      { "name": "special-defense", "value": 105 },
      { "name": "speed", "value": 78 }
    ]
  },
  {
    "id": 10,
    "name": "caterpie",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "types": ["bug"],
    "abilities": ["shield-dust", "run-away"],
    "stats": [
      { "name": "hp", "value": 45 },
      { "name": "attack", "value": 30 },
      { "name": "defense", "value": 35 },
      { "name": "special-attack", "value": 20 },
      { "name": "special-defense", "value": 20 },
      { "name": "speed", "value": 45 }
    ]
  },
  {
    "id": 11,
    "name": "metapod",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "types": ["bug"],
    "abilities": ["shed-skin"],
    "stats": [
      { "name": "hp", "value": 50 },
      { "name": "attack", "value": 20 },
      { "name": "defense", "value": 55 },
      { "name": "special-attack", "value": 25 },
      { "name": "special-defense", "value": 25 },
      { "name": "speed", "value": 30 }
    ]
  },
  {
    "id": 12,
    "name": "butterfree",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "types": ["bug", "flying"],
    "abilities": ["compound-eyes", "tinted-lens"],
    "stats": [
      { "name": "hp", "value": 60 },
      { "name": "attack", "value": 45 },
      { "name": "defense", "value": 50 },
      { "name": "special-attack", "value": 90 },
      { "name": "special-defense", "value": 80 },
      { "name": "speed", "value": 70 }
    ]
  },
  {
    "id": 13,
    "name": "weedle",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    "types": ["bug", "poison"],
    "abilities": ["shield-dust", "run-away"],
    "stats": [
      { "name": "hp", "value": 40 },
      { "name": "attack", "value": 35 },
      { "name": "defense", "value": 30 },
      { "name": "special-attack", "value": 20 },
      { "name": "special-defense", "value": 20 },
      { "name": "speed", "value": 50 }
    ]
  },
  {
    "id": 14,
    "name": "kakuna",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    "types": ["bug", "poison"],
    "abilities": ["shed-skin"],
    "stats": [
      { "name": "hp", "value": 45 },
      { "name": "attack", "value": 25 },
      { "name": "defense", "value": 50 },
      { "name": "special-attack", "value": 25 },
      { "name": "special-defense", "value": 25 },
      { "name": "speed", "value": 35 }
    ]
  },
  {
    "id": 15,
    "name": "beedrill",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    "types": ["bug", "poison"],
    "abilities": ["swarm", "sniper"],
    "stats": [
      { "name": "hp", "value": 65 },
      { "name": "attack", "value": 90 },
      { "name": "defense", "value": 40 },
      { "name": "special-attack", "value": 45 },
      { "name": "special-defense", "value": 80 },
      { "name": "speed", "value": 75 }
    ]
  },
  {
    "id": 16,
    "name": "pidgey",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "types": ["normal", "flying"],
    "abilities": ["keen-eye", "tangled-feet", "big-pecks"],
    "stats": [
      { "name": "hp", "value": 40 },
      { "name": "attack", "value": 45 },
      { "name": "defense", "value": 40 },
      { "name": "special-attack", "value": 35 },
      { "name": "special-defense", "value": 35 },
      { "name": "speed", "value": 56 }
    ]
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    "types": ["normal", "flying"],
    "abilities": ["keen-eye", "tangled-feet", "big-pecks"],
    "stats": [
      { "name": "hp", "value": 63 },
      { "name": "attack", "value": 60 },
      { "name": "defense", "value": 55 },
      { "name": "special-attack", "value": 50 },
      { "name": "special-defense", "value": 50 },
      { "name": "speed", "value": 71 }
    ]
  },
  {
    "id": 18,
    "name": "pidgeot",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "types": ["normal", "flying"],
    "abilities": ["keen-eye", "tangled-feet", "big-pecks"],
    "stats": [
      { "name": "hp", "value": 83 },
      { "name": "attack", "value": 80 },
      { "name": "defense", "value": 75 },
      { "name": "special-attack", "value": 70 },
      { "name": "special-defense", "value": 70 },
      { "name": "speed", "value": 101 }
    ]
  },
  {
    "id": 19,
    "name": "rattata",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    "types": ["normal"],
    "abilities": ["run-away", "guts", "hustle"],
    "stats": [
      { "name": "hp", "value": 30 },
      { "name": "attack", "value": 56 },
      { "name": "defense", "value": 35 },
      { "name": "special-attack", "value": 25 },
      { "name": "special-defense", "value": 35 },
      { "name": "speed", "value": 72 }
    ]
  },
  {
    "id": 20,
    "name": "raticate",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    "types": ["normal"],
    "abilities": ["run-away", "guts", "hustle"],
    "stats": [
      { "name": "hp", "value": 55 },
      { "name": "attack", "value": 81 },
      { "name": "defense", "value": 60 },
      { "name": "special-attack", "value": 50 },
      { "name": "special-defense", "value": 70 },
      { "name": "speed", "value": 97 }
    ]
  }
];

