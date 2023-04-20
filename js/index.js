const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector(" #menu-btn");
const closet = document.querySelector("#close-btn");
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})
closet.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})


function openCity(evt, cityName) {
    console.log(evt);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        console.log(tabcontent.length);
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}