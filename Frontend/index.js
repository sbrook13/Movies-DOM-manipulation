const main = document.querySelector('#movies')

fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movies => movies.forEach(movie => {
        const movieCard = document.createElement('div')
        const image = document.createElement('img')
        const title = document.createElement('h2')
        const info = document.createElement('p')

    
        movieCard.className = 'card'
        image.src = movie.image
        title.innerHTML = `<a href="${movie.url}">${movie.title}</a>`
        info.textContent = `${movie.year} - ${movie.description}`


        main.appendChild(movieCard)
        movieCard.append(image, title, info)
    }))

