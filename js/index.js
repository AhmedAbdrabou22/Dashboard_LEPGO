const sideMenu = document .querySelector ("aside");
const menuBtn = document .querySelector (" #menu-btn");
const closet = document.querySelector ("#close-btn");
menuBtn. addEventListener('click', () => {
    sideMenu.style.display = 'block'
})
closet. addEventListener('click', () => {
    sideMenu.style.display = 'none';
})