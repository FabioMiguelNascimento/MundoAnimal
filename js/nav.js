const burguer = document.querySelector('.burguer');
const navLinks = document.querySelector('.nav-links');

burguer.addEventListener('click', () => {
    burguer.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-links') && !event.target.closest('.burguer')) {
        navLinks.classList.remove('active');
    }
});
