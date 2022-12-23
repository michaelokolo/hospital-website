let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


document.onclick = (d) => {
    if(d.target.id !== 'menu-btn' && d.target.class !== 'navbar'){
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
}



menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}