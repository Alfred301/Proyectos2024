
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'HiHqce2j3zTRs6X1fxYjH8F1yxGUOojFMBt762uVyM4SxIJM';  // Reemplaza con tu clave de API de Currents API
    const url = `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data); // Imprime la respuesta completa en la consola

            const newsContainer = document.getElementById('news-container');

            data.news.forEach(article => {
                if (article.title && article.url && article.description && article.image) {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('news-article');
                

                    const title = `<h2>${article.title}</h2>`;
                    const imageUrl = article.image ? article.image : './img/noticiasDefecto.jpg';
                    const image = `<img src="${imageUrl}" alt="Article Image" onerror="this.onerror=null;this.src='./img/noticiasDefecto.jpg';">`;
                    
                    const fecha = article.published;
                    const dateOnly = fecha.split(" ")[0];
                    

                    articleElement.innerHTML = `
                        <a href="${article.url}" target="_blank">${image}${title}</a>
                        ${dateOnly}
                    `;
                    newsContainer.appendChild(articleElement);
                } else {
                    console.log('Article missing essential information:', article);
                }
            });

            if (data.news.length === 0) {
                newsContainer.innerHTML = '<p>No news available at the moment.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            document.getElementById('news-container').innerHTML = '<p>Failed to fetch news. Please try again later.</p>';
        });
});

document.getElementById("open-menu").addEventListener('click', function(Event){

    if(document.getElementById("news-container").style.marginTop === "680px"){
        document.getElementById("news-container").style.marginTop = "0px";
    }else{
        document.getElementById("news-container").style.marginTop = "680px";
    }
});

const mediaQuery = window.matchMedia('(min-width: 700px)');

function handleMediaQueryChange(e) {
    if (e.matches) {
        document.getElementById("open-menu").checked = false;
        document.getElementById("news-container").style.marginTop = "0px";
        
        console.log('La pantalla es mas de 700.');

    } else {
        console.log('La pantalla es menos de 700.');
    }
}
mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);