const menubtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");
// toggle mobile menu //
menubtn.addEventListener("click",() =>{
    navlinks.classList.toggle('mobile-menu')
});
// collapse menu when any link is clicked //
const navitems = document.querySelectorAll('.nav-links li a');
navitems.forEach(item => {
    item.addEventListener("click",() =>{
        if(navlinks.classList.contains("mobile-menu")){
            navlinks.classList.remove("mobile-menu");
        }
    });
})


