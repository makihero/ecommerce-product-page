// cantidad de articulos a comprar.
let minus = document.querySelector(".info__quantity-decrease");
let plus = document.querySelector(".info__quantity-increase");
let value = document.querySelector(".info__quantity-value");

let count = 0;
plus.addEventListener("click", () => {
    count++;
    value.textContent = count;
})

minus.addEventListener("click", () => {
    count--;
    if (count < 0) {
        count = 0;
    } else {
        value.textContent = count;
    }
})

// agregar productos al carrito.
const addToCart = document.querySelector(".info__add-to-cart");
let cartNotification = document.querySelector(".header__cart-number");
let lastValue = parseInt(cartNotification.textContent);

addToCart.addEventListener("click", () => {
    lastValue = lastValue + count;

    drawCart();

    cartNotification.textContent = lastValue;
    cartNotification.style.display = "block";
    price.innerHTML = `$125.00 x ${lastValue} <span>$${125 * lastValue}.00</span>`;
})

// abrir y cerrar modal.
let cart = document.querySelector(".header__cart");
let modal = document.querySelector(".modal__cart");
let price = document.querySelector(".modal__cart-info-price");

cart.addEventListener("click", () => {
    modal.classList.toggle("show");

    if (lastValue == 0) {
        cartContent.innerHTML = `<p class="modal__cart-info-empty">Your cart is empty.</p>`
    } else {
        drawCart();
    }

})

//borrar articulos del carrito.
let cartContent = document.querySelector(".modal__cart-content");

function deleteCart() {
    let deleteItem = document.querySelector(".modal__cart-info-delete");
    deleteItem.addEventListener("click", () => {
        cartContent.innerHTML = `<p class="modal__cart-info-empty">Your cart is empty.</p>`;
        lastValue = 0;
        cartNotification.textContent = lastValue;
    })
}

//cambiar imagen del modal.
let previus = document.querySelector(".gallery__previous");
let next = document.querySelector(".gallery__next");
let image = document.querySelector(".gallery__image-container");

let imagCount = 0;

next.addEventListener("click", () => {
    changeImage(image);
})

previus.addEventListener("click", () => {
    changeImagePrevius(image);
})

//mostrar modal de imagenes en desktop.
let modalGallery = document.querySelector(".modal__gallery-background");
let close = document.querySelector(".modal__gallery-close");

image.addEventListener("click", () => {
    modalGallery.style.display = "grid";
})

close.addEventListener("click", () => {
    modalGallery.style.display = "none";
})

//cambiar imagenes miniaturas de la pagina.
let thumbnails = document.querySelectorAll(".gallery__thumbnails");
thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", (e) => {
        image.style.backgroundImage = `url(../images/image-product-${e.target.id}.jpg)`
    })
})

//cambiar imagen del modal de imagenes en desktop.
let modalThumbnails = document.querySelectorAll(".modal__gallery-thumbnails");
let galleryContainer = document.querySelector(".modal__gallery-container");
modalThumbnails = [...modalThumbnails];

modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener("click", (e) => {
        console.log(e.target.id.slice(-1));
        galleryContainer.style.backgroundImage = `url(../images/image-product-${e.target.id.slice(-1)}.jpg)`
        changeImage(galleryContainer);
    })
})

//cambiar imagen del modal de imagenes en desktop con flechas.
let modalNext = document.querySelector(".modal__gallery-next");
let modalPrevius = document.querySelector(".modal__gallery-previous");

modalNext.addEventListener("click", () => {
    changeImage(galleryContainer);
})

modalPrevius.addEventListener("click", () => {
    changeImagePrevius(galleryContainer);
})

//mostrar el navbar al hacer clic en el menu hamburguesa.
let modalNav = document.querySelector(".modal__background");
let logoBurguer = document.querySelector(".header__menu");
let closeNav = document.querySelector(".modal__navbar-close");

logoBurguer.addEventListener("click", () => {
    modalNav.style.display = "flex";
})

closeNav.addEventListener("click", () => {
    modalNav.style.display = "none";
})
















//Funciones
function drawCart() {
    cartContent.innerHTML = `
    <div class="modal__cart-info">
        <img class="modal__cart-info-image" src="images/image-product-1-thumbnail.jpg" alt="">
        <div>
        <p class="modal__cart-info-title">Autumn Limited Edition...</p>
        <p class="modal__cart-info-price">$125.00 x ${lastValue} <span>$${125 * lastValue}.00</span></p>
        </div>
        <img class="modal__cart-info-delete" src="images/icon-delete.svg" alt="">
    </div>
    <button class="modal__cart-info-checkout">Checkout</button>`;
    deleteCart();
}

function changeImage(container) {
    if (imagCount == 4) {
        imagCount = 1;
    } else {
        imagCount++;
    }
    container.style.backgroundImage = `url(../images/image-product-${imagCount}.jpg)`;
}

function changeImagePrevius(container) {
    if (imagCount <= 1) {
        imagCount = 4;
    } else {
        imagCount--;
    }
    container.style.backgroundImage = `url(../images/image-product-${imagCount}.jpg)`;
}