const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector(" #menu-btn");
const closet = document.querySelector("#close-btn");
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})
closet.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})


function openCity(evt, branchName) {
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
    document.getElementById(branchName).style.display = "block";
    evt.currentTarget.className += "active";
}

var tablinksAll = document.querySelectorAll('.taplinks');
tablinksAll.forEach((taplink) => {
    taplink.addEventListener("click", () => {
        tablinksAll.forEach((tablink) => {
            tablink.classList.remove("active2");
        })
        taplink.classList.add("active2");
    })
})


const input = document.getElementById("input-file");
const image = document.getElementById("image");

// Add an event listener to the input element
input.addEventListener("change", function () {
    // Get the selected file
    const file = input.files[0];

    // Create a FileReader object
    const reader = new FileReader();

    // Set the onload function of the reader object
    reader.onload = function (e) {
        // Set the source of the image element to the contents of the file
        image.src = e.target.result;
    };
    reader.readAsDataURL(file);
});




const themetoggler = document.querySelector(".theme-toggler");
themetoggler.addEventListener("click",()=>{
    document.body.classList.toggle('dark-theme-variables')
})