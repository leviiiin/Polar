// ____________________Mobile_menu________________________________________

const menu = document.getElementById('menu')
const burger = document.getElementById('burger')
const closeMenu = document.getElementById('menu-close')
const mobileMenu = document.getElementById('mobile-menu')

burger.addEventListener('click', function () {
    mobileMenu.style.display = 'flex';
    burger.style.display = 'none';
    closeMenu.style.display = 'block';
})

closeMenu.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    burger.style.display = 'block';
    closeMenu.style.display = 'none';
})

// ______________________________Card_animation___________________________________



function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }
    });
}
let options = { threshold: [0.7] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('[class*=anim-el_]');
for (let elm of elements) {
    observer.observe(elm);
}






// _________________________Product_Generation___________________________________


const CategoryData = {

    ice_cream: {

        product_1: {
            title: 'Brown bread',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '19.55',
            priceOld: '22.55',
            img: '../public/products/ice-cream/brown-bread.png',
        },

        product_2: {
            title: 'Cayenne chocolate',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '18.99',
            priceOld: '23.99',
            img: '../public/products/ice-cream/cayenne.png',
        },

        product_3: {
            title: 'Sweet corn',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '21.00',
            priceOld: '25.00',
            img: '../public/products/ice-cream/sweet-corn.png',
        }
    },

    chocolate: {

        product_1: {
            title: 'Feastables Milk',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '3.55',
            priceOld: '5.55',
            img: '../public/products/chocolate/milk-chocolate.webp',
        },

        product_2: {
            title: 'Feastables Deez Nuts',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '2.99',
            priceOld: '4.99',
            img: '../public/products/chocolate/nuts.webp',
        },

        product_3: {
            title: 'Feastables Crunch',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '3.00',
            priceOld: '6.00',
            img: '../public/products/chocolate/crunch.webp',
        }
    },

    cake: {

        product_1: {
            title: 'Queen of Spades',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '15.55',
            priceOld: '17.55',
            img: '../public/products/cake/queenOfSpades.jpg',
        },

        product_2: {
            title: 'Queen of Spades',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '20.99',
            priceOld: '24.99',
            img: '../public/products/cake/queenOfSpades.jpg',
        },

        product_3: {
            title: 'Queen of Spades',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '20.00',
            priceOld: '22.00',
            img: '../public/products/cake/queenOfSpades.jpg',
        }
    },

    candy: {

        product_1: {
            title: 'Bean Boozled Roulette',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '15.55',
            priceOld: '17.55',
            img: '../public/products/candy/beanBoozledRoulette.jpg',
        },

        product_2: {
            title: 'Been Boozled',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '20.99',
            priceOld: '24.99',
            img: '../public/products/candy/beenBoozled.jpg',
        },

        product_3: {
            title: 'Harry Potter',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '20.00',
            priceOld: '22.00',
            img: '../public/products/candy/harryPotter.jpg',
        }
    },

    platters: {

        product_1: {
            title: 'Platters №1',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '15.55',
            priceOld: '17.55',
            img: '../public/products/platters/pletters1.webp',
        },

        product_2: {
            title: 'Platters №2',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '20.99',
            priceOld: '24.99',
            img: '../public/products/platters/pletters2.webp',
        },

        product_3: {
            title: 'Platters №3',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '20.00',
            priceOld: '22.00',
            img: '../public/products/platters/pletters3.webp',
        }
    },

    dessert: {

        product_1: {
            title: 'Dessert №1',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '15.55',
            priceOld: '17.55',
            img: '../public/products/dessert/dessert1.jpg',
        },

        product_2: {
            title: 'Dessert №2',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '20.99',
            priceOld: '24.99',
            img: '../public/products/dessert/dessert2.jpg',
        },

        product_3: {
            title: 'Dessert №3',
            description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
            priceNew: '20.00',
            priceOld: '22.00',
            img: '../public/products/dessert/dessert1.jpg',
        }
    },
}

const productList = document.getElementById('productList');
const navItems = document.querySelectorAll('.product__nav-item');
let currentCategory = 'ice_cream';

function productActive(clickedElement) {
    if (!clickedElement.classList.contains('active')) {
        document.querySelector('.product__nav-item.active').classList.remove('active');
        clickedElement.classList.add('active')
        currentCategory = clickedElement.getAttribute('data-category');
        displayProducts();
    }
}

function displayProducts() {
    const categoryProduct = CategoryData[currentCategory];
    productList.innerHTML = Object.keys(categoryProduct)
        .map(productId => {
            const product = categoryProduct[productId];
            return `
            <div class="product__item">
                <img src="${product.img}" alt="img" class="product__item_img">
                <div class="product__item_text">
                    <h3 class="product__item_title">${product.title}</h3>
                    <p class="product__item_description">${product.description}</p>
                    <div class="product__item-flex">
                        <div class="product__item_price">
                            <span class="h3 product__item_price-new">$${product.priceNew}</span>
                            <span class="h3 product__item_price-old">$${product.priceOld}</span>
                        </div>
                        <button class="button--accent">Buy Now</button>
                    </div>
                </div>
            </div>
            `
        }).join('');
}

displayProducts();





