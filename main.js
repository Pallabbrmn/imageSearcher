const accessKey = "dFHJ7u9Z4eVsWzZeqe25kcJkdt68kPhu36hGImsY1lY";

const formEl = document.querySelector('form');
const searchInput = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const showMore = document.getElementById('show-more');

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    console.log(results);

    if(page === 1){
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('search-result');
        const image = document.createElement('img');
        image.src = result.urls.small;

        imageWrapper.appendChild(image);
        searchResults.appendChild(imageWrapper);

        // const icons = document.createElement('div');
        // icons.classList.add('options');
        // const icon1 = document.createElement('i');
        // icon1.classList.add('ri-heart-3-line');
        // const icon2 = document.createElement('i');
        // icon2.classList.add('ri-download-line');

        // icons.appendChild('icon1');
        // icons.appendChild('icon2');
        // imageWrapper.appendChild('icons');
    });

    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    searchImages();
})

showMore.addEventListener('click', () => {
    searchImages();
})



