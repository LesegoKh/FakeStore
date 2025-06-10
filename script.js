const container = document.getElementById('product-container');
const loadMoreBtn = document.getElementById('load-more');

let productData = [];
let currentIndex = 0;
const itemsPerPage = 6;

//Fetches products from the API 
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => {
    productData = data;
    renderProducts();
});

//Render function using Looping

function renderProducts() {
    const nextItems = productData.slice(currentIndex, currentIndex + itemsPerPage);
    nextItems.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>R ${product.price}</p>
        `;
        container.appendChild(card);
        });
        currentIndex += itemsPerPage;

        //Hide button if no items found

        if (currentIndex >= productData.length) {
        loadMoreBtn.style.display = 'none';
        }
}
        loadMoreBtn.addEventListener('click', renderProducts);