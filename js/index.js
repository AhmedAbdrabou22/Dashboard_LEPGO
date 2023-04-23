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
    var i
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}

var tablinksAll = document.querySelectorAll('.taplinks');
tablinksAll.forEach((taplink)=>{
    taplink.addEventListener("click",()=>{
        tablinksAll.forEach((tablink)=>{
            tablink.classList.remove("active2");
        })
        taplink.classList.add("active2");
    })
})