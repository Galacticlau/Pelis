const movies = [
  {
    id: 1,
    title: "Interestelar",
    year: 2014,
    minutes: 169,
    genre: "Ciencia ficción",
    moods: ["emocionante", "reflexivo", "intenso"],
    emoji: "🚀",
    colors: ["#3b2d6b", "#101827"],
    description: "Un grupo de exploradores atraviesa el espacio en busca de una nueva posibilidad para la humanidad."
  },
  {
    id: 2,
    title: "La llegada",
    year: 2016,
    minutes: 116,
    genre: "Ciencia ficción",
    moods: ["reflexivo", "intenso", "tranquilo"],
    emoji: "🛸",
    colors: ["#2c5364", "#0f2027"],
    description: "Una lingüista intenta comunicarse con visitantes extraterrestres mientras el mundo busca entender sus intenciones."
  },
  {
    id: 3,
    title: "El viaje de Chihiro",
    year: 2001,
    minutes: 125,
    genre: "Animación",
    moods: ["inspirador", "emocionante", "tranquilo"],
    emoji: "🐉",
    colors: ["#0f766e", "#1e293b"],
    description: "Una niña entra en un mundo fantástico y debe encontrar el valor para ayudar a su familia y regresar a casa."
  },
  {
    id: 4,
    title: "Coco",
    year: 2017,
    minutes: 105,
    genre: "Animación",
    moods: ["inspirador", "divertido", "emocionante"],
    emoji: "🎸",
    colors: ["#7c2d12", "#431407"],
    description: "Un joven músico emprende una aventura extraordinaria que conecta sus sueños con la historia de su familia."
  },
  {
    id: 5,
    title: "En busca de la felicidad",
    year: 2006,
    minutes: 117,
    genre: "Drama",
    moods: ["inspirador", "reflexivo"],
    emoji: "🌇",
    colors: ["#92400e", "#172554"],
    description: "Un padre enfrenta enormes dificultades mientras intenta construir una vida mejor para él y su hijo."
  },
  {
    id: 6,
    title: "The Truman Show",
    year: 1998,
    minutes: 103,
    genre: "Drama",
    moods: ["reflexivo", "divertido"],
    emoji: "📺",
    colors: ["#0369a1", "#1e3a8a"],
    description: "Un hombre comienza a sospechar que el mundo que lo rodea quizá no sea tan real como parece."
  },
  {
    id: 7,
    title: "Knives Out",
    year: 2019,
    minutes: 130,
    genre: "Misterio",
    moods: ["divertido", "emocionante"],
    emoji: "🔎",
    colors: ["#7f1d1d", "#312e81"],
    description: "Un detective investiga a una excéntrica familia después de un misterioso fallecimiento."
  },
  {
    id: 8,
    title: "Paddington 2",
    year: 2017,
    minutes: 103,
    genre: "Comedia",
    moods: ["divertido", "tranquilo", "inspirador"],
    emoji: "🐻",
    colors: ["#b45309", "#1e40af"],
    description: "Paddington intenta conseguir el regalo perfecto para su tía y termina envuelto en una inesperada aventura."
  },
  {
    id: 9,
    title: "The Martian",
    year: 2015,
    minutes: 144,
    genre: "Ciencia ficción",
    moods: ["divertido", "emocionante", "inspirador"],
    emoji: "🪐",
    colors: ["#9a3412", "#172554"],
    description: "Un astronauta aislado en Marte utiliza ciencia, ingenio y humor para intentar sobrevivir."
  },
  {
    id: 10,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    minutes: 117,
    genre: "Animación",
    moods: ["emocionante", "divertido", "inspirador"],
    emoji: "🕷️",
    colors: ["#be123c", "#312e81"],
    description: "Miles Morales descubre que no existe una sola forma de convertirse en héroe."
  },
  {
    id: 11,
    title: "El gran hotel Budapest",
    year: 2014,
    minutes: 99,
    genre: "Comedia",
    moods: ["divertido", "tranquilo"],
    emoji: "🏨",
    colors: ["#be185d", "#7c3aed"],
    description: "Un conserje y su joven aprendiz quedan involucrados en una extravagante historia de herencias y persecuciones."
  },
  {
    id: 12,
    title: "Dune",
    year: 2021,
    minutes: 155,
    genre: "Ciencia ficción",
    moods: ["intenso", "emocionante"],
    emoji: "🏜️",
    colors: ["#a16207", "#292524"],
    description: "Un joven heredero llega a un planeta desértico fundamental para el equilibrio del poder en el universo."
  },
  {
    id: 13,
    title: "El castillo ambulante",
    year: 2004,
    minutes: 119,
    genre: "Fantasía",
    moods: ["tranquilo", "emocionante", "inspirador"],
    emoji: "🏰",
    colors: ["#0f766e", "#4c1d95"],
    description: "Una joven afectada por un hechizo encuentra refugio en el castillo mágico de un misterioso hechicero."
  },
  {
    id: 14,
    title: "El origen",
    year: 2010,
    minutes: 148,
    genre: "Ciencia ficción",
    moods: ["intenso", "emocionante", "reflexivo"],
    emoji: "🌀",
    colors: ["#334155", "#0f172a"],
    description: "Un especialista en infiltrarse en sueños recibe el desafío de implantar una idea en lugar de robarla."
  },
  {
    id: 15,
    title: "Top Gun: Maverick",
    year: 2022,
    minutes: 131,
    genre: "Acción",
    moods: ["emocionante", "inspirador"],
    emoji: "✈️",
    colors: ["#075985", "#7c2d12"],
    description: "Un experimentado piloto vuelve a entrenar a una nueva generación para una misión de gran dificultad."
  },
  {
    id: 16,
    title: "Ford v Ferrari",
    year: 2019,
    minutes: 152,
    genre: "Drama",
    moods: ["emocionante", "inspirador", "intenso"],
    emoji: "🏎️",
    colors: ["#b91c1c", "#1e293b"],
    description: "Ingenieros y pilotos desafían los límites de la tecnología y la competencia automovilística."
  },
  {
    id: 17,
    title: "Los Mitchell contra las máquinas",
    year: 2021,
    minutes: 113,
    genre: "Animación",
    moods: ["divertido", "emocionante"],
    emoji: "🤖",
    colors: ["#6d28d9", "#db2777"],
    description: "Una familia muy particular termina siendo la inesperada esperanza de la humanidad durante una rebelión tecnológica."
  },
  {
    id: 18,
    title: "Enola Holmes",
    year: 2020,
    minutes: 123,
    genre: "Misterio",
    moods: ["divertido", "emocionante", "inspirador"],
    emoji: "🕵️",
    colors: ["#115e59", "#4c1d95"],
    description: "La hermana adolescente de Sherlock Holmes investiga una desaparición mientras intenta decidir su propio futuro."
  },
  {
    id: 19,
    title: "La vida secreta de Walter Mitty",
    year: 2013,
    minutes: 114,
    genre: "Aventura",
    moods: ["inspirador", "tranquilo", "divertido"],
    emoji: "🏔️",
    colors: ["#0369a1", "#15803d"],
    description: "Un hombre acostumbrado a imaginar aventuras decide finalmente salir al mundo y vivir una de verdad."
  },
  {
    id: 20,
    title: "Jumanji: Welcome to the Jungle",
    year: 2017,
    minutes: 119,
    genre: "Aventura",
    moods: ["divertido", "emocionante"],
    emoji: "🎮",
    colors: ["#166534", "#713f12"],
    description: "Cuatro estudiantes quedan atrapados dentro de un videojuego y deben superar sus desafíos para regresar."
  }
];

const genreSelect = document.getElementById("genre");
const moodSelect = document.getElementById("mood");
const durationSelect = document.getElementById("duration");
const recommendButton = document.getElementById("recommendButton");
const anotherButton = document.getElementById("anotherButton");
const favoriteButton = document.getElementById("favoriteButton");
const movieGrid = document.getElementById("movieGrid");
const resultsCount = document.getElementById("resultsCount");
const themeButton = document.getElementById("themeButton");

let currentMovie = movies[0];
let favorites = JSON.parse(localStorage.getItem("cinematch-favorites") || "[]");

function durationCategory(minutes) {
  if (minutes < 120) return "corta";
  if (minutes <= 150) return "media";
  return "larga";
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours} h ${mins.toString().padStart(2, "0")} min`;
}

function getFilteredMovies() {
  return movies.filter(movie => {
    const genreOk = genreSelect.value === "todos" || movie.genre === genreSelect.value;
    const moodOk = moodSelect.value === "todos" || movie.moods.includes(moodSelect.value);
    const durationOk = durationSelect.value === "todos" || durationCategory(movie.minutes) === durationSelect.value;
    return genreOk && moodOk && durationOk;
  });
}

function showFeatured(movie) {
  currentMovie = movie;

  document.getElementById("featuredTitle").textContent = movie.title;
  document.getElementById("featuredYear").textContent = movie.year;
  document.getElementById("featuredDuration").textContent = formatDuration(movie.minutes);
  document.getElementById("featuredGenre").textContent = movie.genre;
  document.getElementById("featuredDescription").textContent = movie.description;
  document.getElementById("featuredEmoji").textContent = movie.emoji;

  const visual = document.getElementById("featuredVisual");
  visual.style.background = `
    radial-gradient(circle at 30% 20%, rgba(255,255,255,.16), transparent 30%),
    linear-gradient(145deg, ${movie.colors[0]}, ${movie.colors[1]})
  `;

  const tags = document.getElementById("featuredTags");
  tags.innerHTML = movie.moods
    .map(mood => `<span class="tag">${capitalize(mood)}</span>`)
    .join("");

  updateFavoriteButton();
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function recommendRandom() {
  const filtered = getFilteredMovies();
  renderMovies(filtered);

  if (filtered.length === 0) return;

  let choices = filtered.filter(movie => movie.id !== currentMovie.id);
  if (choices.length === 0) choices = filtered;

  const random = choices[Math.floor(Math.random() * choices.length)];
  showFeatured(random);

  document.getElementById("featuredSection").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function renderMovies(list) {
  resultsCount.textContent = `${list.length} resultado${list.length === 1 ? "" : "s"}`;

  if (list.length === 0) {
    movieGrid.innerHTML = `
      <div class="no-results">
        No encontré películas con esa combinación. Prueba cambiando uno de los filtros.
      </div>
    `;
    return;
  }

  movieGrid.innerHTML = list.map(movie => `
    <article class="movie-card">
      <div class="movie-card__visual" style="--card-a:${movie.colors[0]}; --card-b:${movie.colors[1]};">
        ${movie.emoji}
      </div>
      <div class="movie-card__body">
        <div class="movie-card__top">
          <h3>${movie.title}</h3>
          <button class="movie-card__favorite" onclick="toggleFavorite(${movie.id})" aria-label="Guardar ${movie.title}">
            ${favorites.includes(movie.id) ? "♥" : "♡"}
          </button>
        </div>
        <div class="meta">
          <span>${movie.year}</span><span>•</span>
          <span>${formatDuration(movie.minutes)}</span><span>•</span>
          <span>${movie.genre}</span>
        </div>
        <p>${movie.description}</p>
      </div>
    </article>
  `).join("");
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(movieId => movieId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("cinematch-favorites", JSON.stringify(favorites));
  renderMovies(getFilteredMovies());
  renderFavorites();
  updateFavoriteButton();
}

function updateFavoriteButton() {
  const saved = favorites.includes(currentMovie.id);
  favoriteButton.textContent = saved ? "♥ Guardada" : "♡ Guardar";
}

function renderFavorites() {
  const container = document.getElementById("favoritesList");
  const selected = movies.filter(movie => favorites.includes(movie.id));

  if (selected.length === 0) {
    container.innerHTML = `<p class="empty-state">Aún no has guardado películas.</p>`;
    return;
  }

  container.innerHTML = selected.map(movie => `
    <div class="favorite-chip">
      <span>${movie.emoji} ${movie.title}</span>
      <button onclick="toggleFavorite(${movie.id})" aria-label="Quitar ${movie.title}">✕</button>
    </div>
  `).join("");
}

[genreSelect, moodSelect, durationSelect].forEach(control => {
  control.addEventListener("change", () => {
    renderMovies(getFilteredMovies());
  });
});

recommendButton.addEventListener("click", recommendRandom);
anotherButton.addEventListener("click", recommendRandom);
favoriteButton.addEventListener("click", () => toggleFavorite(currentMovie.id));

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");
  themeButton.textContent = light ? "🌙" : "☀️";
  localStorage.setItem("cinematch-theme", light ? "light" : "dark");
});

if (localStorage.getItem("cinematch-theme") === "light") {
  document.body.classList.add("light");
  themeButton.textContent = "🌙";
}

showFeatured(movies[0]);
renderMovies(movies);
renderFavorites();
