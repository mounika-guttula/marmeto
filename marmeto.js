let products = [];

function fetchData() {
    fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093')
        .then(response => response.json())
        .then(data => {
            products = data.data;
            renderProducts(products);
            renderProductsOne(products);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function renderProducts(products, searchTerm) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');

        const productDetails = document.createElement('div');
        productDetails.classList.add('productDetails');


        const imageCard = document.createElement('div')


        const productBadge = document.createElement('div');
        productBadge.classList.add('productBadge');
        productBadge.textContent = product.product_badge;
        imageCard.appendChild(productBadge);

        const productImage = document.createElement('div'); // Use a div instead of an img element
        productImage.classList.add('productImage');
        productImage.style.backgroundImage = `url('${product.product_image}')`; // Set the background image URL
        imageCard.appendChild(productImage);

        productCard.appendChild(imageCard)


        const titleCard = document.createElement('div');
        titleCard.classList.add('title-card');

        const productTitle = document.createElement('div');
        productTitle.classList.add('productTitle');

        // Highlight the product title if it contains the search term
        const highlightedTitle = highlightSearchTerm(product.product_title, searchTerm);
        productTitle.innerHTML = highlightedTitle;

        titleCard.appendChild(productTitle);

        const productVariants = document.createElement('div');
        productVariants.classList.add('productVariants');

        // Highlight product variants that contain the search term
        product.product_variants.forEach(variant => {
            const variantElement = document.createElement('div');
            variantElement.classList.add('variant');
            const variantText = Object.values(variant)[0];
            const highlightedVariant = highlightSearchTerm(variantText, searchTerm);
            variantElement.innerHTML = highlightedVariant;
            productVariants.appendChild(variantElement);
        });

        titleCard.appendChild(productVariants);
        productDetails.appendChild(titleCard);
        productCard.appendChild(productDetails);
        productContainer.appendChild(productCard);
    });
}

function renderProductsOne(products, searchTerm) {
    const productContainerOne = document.getElementById('productContainerOne');
    productContainerOne.innerHTML = '';

    products.forEach(product => {
        const productCardOne = document.createElement('div');
        productCardOne.classList.add('productCardOne');

        const productDetailsOne = document.createElement('div');
        productDetailsOne.classList.add('productDetailsOne');


        const imageCardOne = document.createElement('div')


        const productBadgeOne = document.createElement('div');
        productBadgeOne.classList.add('productBadgeOne');
        productBadgeOne.textContent = product.product_badge;
        imageCardOne.appendChild(productBadgeOne);

        const productImageOne = document.createElement('div'); // Use a div instead of an img element
        productImageOne.classList.add('productImageOne');
        productImageOne.style.backgroundImage = `url('${product.product_image}')`; // Set the background image URL
        imageCardOne.appendChild(productImageOne);

        productCardOne.appendChild(imageCardOne)


        const titleCardOne = document.createElement('div');
        titleCardOne.classList.add('title-cardOne');

        const productTitleOne = document.createElement('div');
        productTitleOne.classList.add('productTitleOne');

        // Highlight the product title if it contains the search term
        const highlightedTitleOne = highlightSearchTerm(product.product_title, searchTerm);
        productTitleOne.innerHTML = highlightedTitleOne;

        titleCardOne.appendChild(productTitleOne);

        const productVariantsOne = document.createElement('div');
        productVariantsOne.classList.add('productVariantsOne');

        // Highlight product variants that contain the search term
        product.product_variants.forEach(variant => {
            const variantElementOne = document.createElement('div');
            variantElementOne.classList.add('variantOne');
            const variantText = Object.values(variant)[0];
            const highlightedVariantOne = highlightSearchTerm(variantText, searchTerm);
            variantElementOne.innerHTML = highlightedVariantOne;
            productVariantsOne.appendChild(variantElementOne);
        });

        titleCardOne.appendChild(productVariantsOne);
        productDetailsOne.appendChild(titleCardOne);
        productCardOne.appendChild(productDetailsOne);
        productContainerOne.appendChild(productCardOne);
    });
}

function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) {
        return text;
    }

    const regex = new RegExp(`(${searchTerm.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function searchProducts(searchTerm) {
    renderProducts(products, searchTerm);
    renderProductsOne(products, searchTerm);
}


function toggleView(viewType) {
    if (viewType === 'list') {
        const productContainer = document.getElementById('productContainer');
        productContainer.classList.remove('off', 'show');
        productContainer.classList.add(`show`);

        const productContainerOne = document.getElementById('productContainerOne');
        productContainerOne.classList.remove('off', 'show');
        productContainerOne.classList.add(`off`);
    } else {
        const productContainer = document.getElementById('productContainer');
        productContainer.classList.remove('off', 'show');
        productContainer.classList.add(`off`);

        const productContainerOne = document.getElementById('productContainerOne');
        productContainerOne.classList.remove('off', 'show');
        productContainerOne.classList.add(`show`);
    }


}

document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});