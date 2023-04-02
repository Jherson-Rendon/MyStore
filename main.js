const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}


const productList = [];

productList.push({
    name: 'Bike',
    price:120,
    image:'https://img.freepik.com/vector-gratis/fondo-bicicleta-roja-campo_23-2147557902.jpg?w=740&t=st=1679852320~exp=1679852920~hmac=c2da99712470d6a880280ae36278c36a7cea5cac714467482b661ce90e7d3f7b'
});


productList.push({
    name: 'Coca cola',
    price:45,
    image:'https://www.eleconomista.com.mx/__export/1637290902063/sites/eleconomista/img/2021/11/18/coca_shutterstock_214810693.jpg_1902800913.jpg'
});


/*<div class="product-card">
                <img src="https://img.freepik.com/vector-gratis/fondo-bicicleta-roja-campo_23-2147557902.jpg?w=740&t=st=1679852320~exp=1679852920~hmac=c2da99712470d6a880280ae36278c36a7cea5cac714467482b661ce90e7d3f7b" alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>*/
function renderProducts(arr)
{
    
for (product of arr){
    const productCard =document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo =document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv =document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(productImg);
productCard.appendChild(productInfo);

cardsContainer.appendChild(productCard);

}
}

renderProducts(productList);