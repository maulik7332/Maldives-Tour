let nav = document.querySelector(".nav");
let ham = document.querySelector(".lines");
let a = document.querySelectorAll("li");
let navlinks = document.querySelector(".nav-links");
ham.addEventListener("click",()=>{
    
    nav.classList.toggle('hamavtive');
    navlinks.classList.toggle("active"); 
})