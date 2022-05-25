let menuIcon = document.querySelector('.menu-icon');
let notificationIcon = document.querySelector('#bell-icon');

let navbar = document.querySelector('.menu');
let notification = document.querySelector('.notification');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('move');
    navbar.classList.toggle('active');
    notification.classList.remove('active');
}

notificationIcon.onclick = () => {
    notification.classList.toggle('active');
}