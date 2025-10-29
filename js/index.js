// Carga básica de la página de inicio + prueba de API (Ditto)
document.addEventListener('DOMContentLoaded', () => {
  // ---- Botones rojos (navegación) ----
  // Busca botones por id; si no existen, los crea dentro de .buttons
  const btnPokedex = document.getElementById('btnPokedex');
  const btnPokedle = document.getElementById('btnPokedle');

  function ensureButtons() {
    let container = document.querySelector('.buttons');
    if (!container) {
      container = document.createElement('div');
      container.className = 'buttons';
      document.querySelector('main .container, main, body').appendChild(container);
    }

    const makeBtn = (id, text) => {
      const a = document.createElement('a');
      a.id = id;
      a.href = '#';
      a.className = 'btn btn-red';
      a.textContent = text;
      return a;
    };

    const pokedexBtn = document.getElementById('btnPokedex') || makeBtn('btnPokedex', '📘 Obrir Pokédex');
    const pokedleBtn = document.getElementById('btnPokedle') || makeBtn('btnPokedle', '🎯 Jugar a Pokedle');

    if (!pokedexBtn.parentElement) container.appendChild(pokedexBtn);
    if (!pokedleBtn.parentElement) container.appendChild(pokedleBtn);

    pokedexBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'pokedex.html';
    });
    pokedleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'pokedle.html';
    });
  }

  ensureButtons();

  // ---- Prueba API: Ditto (solo log en consola por ahora) ----
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(r => {
      if (!r.ok) throw new Error('Error al cargar Ditto');
      return r.json();
    })
    .then(data => {
      // Para verificar que funciona: abre la consola (F12) y mira el log
      const info = {
        id: data.id,
        name: data.name,
        height_m: data.height / 10,
        weight_kg: data.weight / 10,
        types: data.types.map(t => t.type.name)
      };
      console.log('API Ditto OK →', info);
    })
    .catch(err => console.error('Fallo API Ditto:', err));
});
