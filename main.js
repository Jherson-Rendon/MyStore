const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log("entre a tooglle");
    desktopMenu.classList.toggle('inactive');
}

console.log("eesntre a maiun");