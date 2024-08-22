const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
const menuOverlay = document.querySelector('.overlay');
let subMenu;
menuSection.addEventListener('click', (e)=>{
    if (!menu.classList.contains('active')) {
        return;
    }
    if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
}
);
menuArrow.addEventListener('click', ()=>{
    hideSubMenu();
}
);
menuTrigger.addEventListener('click', ()=>{
    toggleMenu();
}
);
menuClosed.addEventListener('click', ()=>{
    toggleMenu();
}
);
menuOverlay.addEventListener('click', ()=>{
    toggleMenu();
}
);
function toggleMenu() {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}
function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.menu-subs');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    menu.querySelector('.menu-mobile-header').classList.add('active');
}
function hideSubMenu() {
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(()=>{
        subMenu.classList.remove('active');
    }
    , 300);
    menu.querySelector('.menu-mobile-title').innerHTML = '';
    menu.querySelector('.menu-mobile-header').classList.remove('active');
}
window.onresize = function() {
    if (this.innerWidth > 991) {
        if (menu.classList.contains('active')) {
            toggleMenu();
        }
    }
};
// slider


document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.querySelector(".slides");
    const slides = Array.from(document.querySelectorAll(".slide"));
    const slideCount = slides.length;

    // Clone slides to create a seamless loop
    function cloneSlides() {
        slides.forEach(slide => {
            const clonedSlide = slide.cloneNode(true);
            slidesContainer.appendChild(clonedSlide);
        });
    }

    // Initialize slider
    function initializeSlider() {
        cloneSlides(); // Clone slides for seamless looping
        const slideWidth = document.querySelector(".slide").offsetWidth;
        slidesContainer.style.width = `${slideWidth * slideCount * 2}px`; // Adjust width to include cloned slides
    }

    // Initialize the slider
    initializeSlider();

    // Handle responsiveness
    window.addEventListener('resize', () => {
        initializeSlider();
    });
});
// heder scroll
document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Change 50 to the scroll position where you want the effect to trigger
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  