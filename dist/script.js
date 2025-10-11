const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const image = document.getElementById('image');
const menuItems = document.querySelectorAll('#menu li');



const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
        }
    });
}, {threshold: 0.5});

const animateElements = document.querySelectorAll('.animate-me');
animateElements.forEach((element) => {
    observer.observe(element);
});


menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    image.classList.toggle('translate-y-10');
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)){
    menu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    }
});
menuItems.forEach((item) => {
    item.addEventListener('click', () =>{
        menu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        image.classList.remove('tramslate-y-10');
    })
});
