let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let homeText = document.querySelector('.home-text');

setTimeout(() => {
    homeText.classList.add('animate');
}, 500); 


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/*Join Now button*/
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-home');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () =>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () =>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () =>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () =>{
    wrapper.classList.remove('active-popup');
});

/* scrolling animation */
var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 


function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }