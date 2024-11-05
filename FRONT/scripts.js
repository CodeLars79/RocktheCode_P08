// scripts.js

async function fetchPosters() {
  try {
    const response = await fetch('http://localhost:3000/api/v1/poster')
    const posters = await response.json()
    displayPosters(posters)
  } catch (error) {
    console.error('Error fetching posters:', error)
  }
}

function displayPosters(posters) {
  const gallery = document.getElementById('poster-gallery')
  gallery.innerHTML = posters
    .map(
      (poster) => `
      <div class="poster-card">
          <img src="${poster.image}" alt="${poster.title}">
          <h3>${poster.title} (${poster.movie_year})</h3>
           <p><strong>Technique:</strong> ${poster.technique}</p>
          <p><strong>Genre:</strong> ${poster.genre}</p>
            <p><strong>Style:</strong> ${poster.style}</p>
            <p><strong>Country:</strong> ${poster.country_of_origin}</p>
            <p><strong>Description:</strong> ${poster.description}</p>
      </div>
  `
    )
    .join('')
}

// Fetch posters on page load
fetchPosters()
