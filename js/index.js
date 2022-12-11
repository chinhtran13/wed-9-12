const ham = document.querySelector(".hamburger");
const links = document.querySelector(".nav-links");
ham.addEventListener('click', ()=>{
    links.classList.toggle("open")
    ham.classList.toggle("open")
})