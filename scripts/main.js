// -- Helpers

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

function validEmailAddress(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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

const animationObserver = new IntersectionObserver(onAnimationElementEntry, {threshold: [0.7]});
const animationElements = document.querySelectorAll('[class*=anim-el_]');
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
    img: './public/products/ice-cream/brown-bread.png',
    category: 'ice_cream'
  },
  {
    title: 'Cayenne chocolate',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '18.99',
    priceOld: '23.99',
    img: './public/products/ice-cream/cayenne.png',
    category: 'ice_cream'
  },
  {
    title: 'Sweet corn',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '21.00',
    priceOld: '',
    img: './public/products/ice-cream/sweet-corn.png',
    category: 'ice_cream'
  },


  {
    title: 'Feastables Milk',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '3.55',
    priceOld: '5.55',
    img: './public/products/chocolate/milk-chocolate.webp',
    category: 'chocolate'
  },
  {
    title: 'Feastables Deez Nuts',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '2.99',
    priceOld: '4.99',
    img: './public/products/chocolate/nuts.webp',
    category: 'chocolate'
  },
  {
    title: 'Feastables Crunch',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '3.00',
    priceOld: '6.00',
    img: './public/products/chocolate/crunch.webp',
    category: 'chocolate'
  },


  {
    title: 'Queen of Spades',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '15.55',
    priceOld: '17.55',
    img: './public/products/cake/queenOfSpades.jpg',
    category: 'cake',
  },
  {
    title: 'Queen of Spades',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '20.99',
    priceOld: '24.99',
    img: './public/products/cake/queenOfSpades.jpg',
    category: 'cake',
  },
  {
    title: 'Queen of Spades',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '20.00',
    priceOld: '22.00',
    img: './public/products/cake/queenOfSpades.jpg',
    category: 'cake',
  },


  {
    title: 'Bean Boozled Roulette',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '15.55',
    priceOld: '17.55',
    img: './public/products/candy/beanBoozledRoulette.jpg',
    category: 'candy',
  },
  {
    title: 'Been Boozled',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '20.99',
    priceOld: '24.99',
    img: './public/products/candy/beenBoozled.jpg',
    category: 'candy',
  },
  {
    title: 'Harry Potter',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '20.00',
    priceOld: '22.00',
    img: './public/products/candy/harryPotter.jpg',
    category: 'candy',
  },


  {
    title: 'Platters №1',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '15.55',
    priceOld: '17.55',
    img: './public/products/platters/pletters1.webp',
    category: 'platters',
  },
  {
    title: 'Platters №2',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '20.99',
    priceOld: '24.99',
    img: './public/products/platters/pletters2.webp',
    category: 'platters',
  },
  {
    title: 'Platters №3',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '20.00',
    priceOld: '22.00',
    img: './public/products/platters/pletters3.webp',
    category: 'platters',
  },


  {
    title: 'Dessert №1',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '15.55',
    priceOld: '17.55',
    img: './public/products/dessert/dessert1.jpg',
    category: 'dessert'
  },
  {
    title: 'Dessert №2',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '20.99',
    priceOld: '24.99',
    img: './public/products/dessert/dessert1.jpg',
    category: 'dessert'
  },
  {
    title: 'Dessert №3',
    description: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
    priceNew: '20.00',
    priceOld: '22.00',
    img: './public/products/dessert/dessert1.jpg',
    category: 'dessert'
  }
];
const productCategories = [

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
];

const productModuleEl = document.getElementById('productsModule');
const productList = productModuleEl.getElementById('productList');
let currentCategory = 'ice_cream';

function changeActiveCategory(clickedElement) {
  const spanElement = document.querySelector(`[data-category="${clickedElement}"]`);

  if (spanElement && !spanElement.classList.contains('active')) {
    const activeElement = document.querySelector('.product__nav-item.active');

    if (activeElement) {
      activeElement.classList.remove('active');
    }

    spanElement.classList.add('active');
    currentCategory = clickedElement;
    displayProducts();
  }
}

async function getProductsByCategory(currentCategory) {
  await wait(1000)

  const isCategoryValid = products.some(product => product.category === currentCategory);
  if (isCategoryValid) {
    return products.filter(product => product.category === currentCategory);
  } else {
    return new Error(`Category '${currentCategory}' not found!`);
  }
}

function displayCategories() {
  const productNav = document.createElement('div');
  productNav.classList.add('product__nav');

  productCategories.forEach((category) => {
    const isActive = category.id === 'ice_cream';

    productNav.innerHTML += `
            <span 
                class="h5 product__nav-item ${isActive ? 'active' : ''}" 
                data-category=${category.id}
                onclick="changeActiveCategory('${category.id}')"
            >${category.name}
            </span>
        `;
  });

  productModuleEl.prepend(productNav);
}

async function displayProducts() {
  try {
    productList.innerHTML = `
            <div class="preloader__container">
                <div class="preloader">
                    <svg viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="big-circle" d="M101 51C101 78.6142 78.6142 101 51 101C23.3858 101 1 78.6142 1 51" stroke="red" stroke-width="2"/>
                        <path class="small-circle" d="M91 51C91 28.9086 73.0914 11 51 11C28.9086 11 11 28.9086 11 51" stroke="red" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        `;

    const selectedProducts = await getProductsByCategory(currentCategory);

    productList.innerHTML = selectedProducts.map(product => `
            <div class="product__item">
                <img src="${product.img}" alt="img" class="product__item_img">
                <div class="product__item_text">
                    <h3 class="product__item_title">${product.title}</h3>
                    <p class="product__item_description">${product.description}</p>
                    <div class="product__item-flex">
                        <div class="product__item_price">
                            <span class="h3 product__item_price-new">$${product.priceNew}</span>
                            <span class="h3 product__item_price-old">${product.priceOld ? `$${product.priceOld}` : ''}</span>
                        </div>
                        <a href="" class="button button--accent">Buy Now</a>
                    </div>
                </div>
            </div>
        `).join('');
  } catch (error) {
    productList.innerHTML = `
            <div class="product__list-error">
                <span class="h1 product__list-error_type">404 Not Found</span>
                <span class="product__list-error_title">
                    Oops... something went wrong. Contact technical support or try again later
                </span>
            </div>
        `
    console.error(error);
  }
}

displayCategories();
displayProducts();

// _________________________Email_Validation_______________________________

const newsletterForm = document.getElementById('newsletterForm');

function handlerOnNewsletterFormSubmit(event) {
  event.preventDefault();

  const emailInput = newsletterForm.querySelector('input[type=email]');
  const errorMessage = document.getElementById('incorrectEmail');
  //const correctEmail = document.getElementById('correctEmail')
  //const correctEmailClose = document.getElementById('correctEmailClose');
  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    errorMessage.innerText = 'Please enter an email address.';
    return false;
  }

  if (!validEmailAddress(emailValue)) {
    errorMessage.innerText = 'Please enter a valid email address.';
    return false;
  }

  emailInput.value = '';
  errorMessage.innerText = ''
  // TODO: Show message from toast component
  //correctEmail.style.display = 'block';
  /*correctEmailClose.addEventListener('click', function () {
      correctEmail.style.display = 'none';
  })*/
  return true;
}

newsletterForm.addEventListener('submit', handlerOnNewsletterFormSubmit);

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
