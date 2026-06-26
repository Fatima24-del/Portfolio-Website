const menu = document.querySelector(".menu");

const nav = document.querySelector("nav ul");


menu.onclick = () => {

nav.classList.toggle("active");

};



// Close menu after clicking link

document.querySelectorAll("nav a").forEach(link=>{

link.onclick=()=>{

nav.classList.remove("active");

}

});