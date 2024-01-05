// Helpers

function wait(ms) {
    if (ms > 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    } else {
        throw new Error('ms must be a number')
    }
}

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

function onAnimationElementEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }
    });
}
let animationObserver = new IntersectionObserver(onAnimationElementEntry, { threshold: [0.7] });
let animationElements = document.querySelectorAll('[class*=anim-el_]');
for (let elm of animationElements) {
    animationObserver.observe(elm);
}

// _________________________Product_Generation___________________________________

const products = [
    {
        title: 'Brown bread',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '19.55',
        priceOld: '22.55',
        img: './public/images/products-img/ice-cream/brown-bread.png',
        category: 'ice_cream'
    },
    {
        title: 'Cayenne chocolate',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '18.99',
        priceOld: '23.99',
        img: './public/images/products-img/ice-cream/cayenne.png',
        category: 'ice_cream'
    },
    {
        title: 'Sweet corn',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '21.00',
        priceOld: '',
        img: './public/images/products-img/ice-cream/sweet-corn.png',
        category: 'ice_cream'
    },



    {
        title: 'Feastables Milk',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '3.55',
        priceOld: '5.55',
        img: './public/images/products-img/chocolate/milk-chocolate.webp',
        category: 'chocolate'
    },
    {
        title: 'Feastables Deez Nuts',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '2.99',
        priceOld: '4.99',
        img: './public/images/products-img/chocolate/nuts.webp',
        category: 'chocolate'
    },
    {
        title: 'Feastables Crunch',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '3.00',
        priceOld: '6.00',
        img: './public/images/products-img/chocolate/crunch.webp',
        category: 'chocolate'
    },



    {
        title: 'Queen of Spades',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '15.55',
        priceOld: '17.55',
        img: './public/images/products-img/cake/queenOfSpades.jpg',
        category: 'cake',
    },
    {
        title: 'Queen of Spades',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '20.99',
        priceOld: '24.99',
        img: './public/images/products-img/cake/queenOfSpades.jpg',
        category: 'cake',
    },
    {
        title: 'Queen of Spades',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '20.00',
        priceOld: '22.00',
        img: './public/images/products-img/cake/queenOfSpades.jpg',
        category: 'cake',
    },



    {
        title: 'Bean Boozled Roulette',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '15.55',
        priceOld: '17.55',
        img: './public/images/products-img/candy/beanBoozledRoulette.jpg',
        category: 'candy',
    },
    {
        title: 'Been Boozled',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '20.99',
        priceOld: '24.99',
        img: './public/images/products-img/candy/beenBoozled.jpg',
        category: 'candy',
    },
    {
        title: 'Harry Potter',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '20.00',
        priceOld: '22.00',
        img: './public/images/products-img/candy/harryPotter.jpg',
        category: 'candy',
    },



    {
        title: 'Platters №1',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '15.55',
        priceOld: '17.55',
        img: './public/images/products-img/platters/pletters1.webp',
        category: 'platters',
    },
    {
        title: 'Platters №2',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '20.99',
        priceOld: '24.99',
        img: './public/images/products-img/platters/pletters2.webp',
        category: 'platters',
    },
    {
        title: 'Platters №3',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '20.00',
        priceOld: '22.00',
        img: './public/images/products-img/platters/pletters3.webp',
        category: 'platters',
    },



    {
        title: 'Dessert №1',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '15.55',
        priceOld: '17.55',
        img: './public/images/products-img/dessert/dessert1.jpg',
        category: 'dessert'
    },
    {
        title: 'Dessert №2',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '20.99',
        priceOld: '24.99',
        img: './public/images/products-img/dessert/dessert1.jpg',
        category: 'dessert'
    },
    {
        title: 'Dessert №3',
        description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        priceNew: '20.00',
        priceOld: '22.00',
        img: './public/images/products-img/dessert/dessert1.jpg',
        category: 'dessert'
    }
]

const productsCategories = [

    {
        name: 'Ice Cream',
        id: 'ice_cream'
    },

    {
        name: 'Chocolate',
        id: 'chocolate'
    },

    {
        name: 'Cake',
        id: 'cake'
    },

    {
        name: 'Candy',
        id: 'candy'
    },

    {
        name: 'Platters',
        id: 'platters'
    },


    {
        name: 'Dessert',
        id: 'dessert'
    },
]

const productsList = document.getElementById('productsList');
const productsNav = document.getElementById('productsNav')
const navItems = document.querySelectorAll('.products__nav-item');
let currentCategory = 'ice_cream';

function changeActiveCategory(event) {
    const clickedElement = event.target;
    const category = clickedElement.dataset.category;

    if (!clickedElement.classList.contains('active')) {
        const activeElement = document.querySelector('.products__nav-item.active');

        if (activeElement) {
            activeElement.classList.remove('active');
        }

        clickedElement.classList.add('active');
        currentCategory = category;
        displayProducts();
    }
}

async function getProductsByCategory(currentCategory) {

    const isCategoryValid = products.some(product => product.category === currentCategory);

    if (isCategoryValid) {
        return products.filter(product => product.category === currentCategory);
    } else {
        return new Error(`Category '${currentCategory}' not found!`);
    }
}

function displayCategories() {
    const fragment = document.createDocumentFragment();

    productsCategories.forEach((category, index) => {
        const categorySpan = document.createElement('span');
        categorySpan.classList.add('h5', 'products__nav-item');

        if (index === 0) {
            categorySpan.classList.add('active')
        }

        categorySpan.dataset.category = category.id;
        categorySpan.textContent = category.name;
        categorySpan.addEventListener('click', changeActiveCategory);

        fragment.appendChild(categorySpan);
    });

    productsNav.appendChild(fragment);
}

async function displayProducts() {
    try {

        const loaderContainer = document.getElementById('loaderContainer');
        loaderContainer.classList.add('is-loading');

        const selectedProducts = await getProductsByCategory(currentCategory);
        productsList.innerHTML = '';

        await wait(2000);

        loaderContainer.classList.remove('is-loading');

        productsInHTML = selectedProducts.map(product => `
                <div class="products__item">
                    <img src="${product.img}" alt="img" class="products__item_img">
                    <div class="products__item_text">
                        <h3 class="products__item_title">${product.title}</h3>
                        <p class="products__item_description">${product.description}</p>
                        <div class="products__item-flex">
                            <div class="products__item_price">
                                <span class="h3 products__item_price-new">$${product.priceNew}</span>
                                <span class="h3 products__item_price-old">${product.priceOld ? `$${product.priceOld}` : ''}</span>
                            </div>
                            <a href="" class="button button--accent">Buy Now</a>
                        </div>
                    </div>
                </div>
        `).join('');

        productsList.innerHTML = productsInHTML;
    } catch (error) {

        loaderContainer.classList.remove('is-loading');
        productsInHTML = `
            <div class="products__list-error">
                <span class="h1 products__list-error_type">404 Not Found</span>
                <span class="products__list-error_title">
                    Oops... something went wrong. Contact technical support or try again later
                </span>
            </div>
        `
        productsList.innerHTML = productsInHTML;
        console.error(error);
    }

}

displayCategories();
displayProducts();

// _________________________Email_Validation_______________________________

function validEmailAddress(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateEmailForm(event) {
    event.preventDefault();

    const emailInput = document.getElementById('inputEmail');
    const incorrectEmail = document.getElementById('incorrectEmail');
    const correctEmail = document.getElementById('correctEmail')
    const correctEmailClose = document.getElementById('correctEmailClose');
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
        incorrectEmail.innerText = 'Please enter an email address.';
        return false;
    }

    if (!validEmailAddress(emailValue)) {
        incorrectEmail.innerText = 'Please enter a valid email address.';
        return false;
    }

    emailInput.value = '';
    incorrectEmail.innerText = ''
    correctEmail.style.display = 'block';
    correctEmailClose.addEventListener('click', function () {
        correctEmail.style.display = 'none';
    })
    return true;
}

// _________________________Question_Validation___________________________________

async function validateQuestionForm(event) {
    event.preventDefault();

    const questionInput = document.getElementById('questionInput');
    const incorrectQuestion = document.getElementById('incorrectQuestion');
    const questionValue = questionInput.value.trim()

    if (!questionValue) {
        incorrectQuestion.innerText = 'Please fill out all required fields.';
        return false;
    }

    questionInput.value = '';
    incorrectQuestion.innerText = 'Question sent';
    incorrectQuestion.style.color = '#1dc37e'
    await wait(2500);
    incorrectQuestion.innerText = '';
    incorrectQuestion.style.color = 'var(--primary-hover)'


    return true;
}
