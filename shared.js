const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');



selectPlanButtons.forEach( (button) => (button.addEventListener('click', () => {
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
})));

noBtn.addEventListener('click', () => {
   closeModal();
});
backdrop.addEventListener('click', () => {
    closeModal();
    mobileNav.style.display = 'none';

});

function closeModal(){
    modal.classList.remove('open');
    backdrop.classList.remove('open');
    mobileNav.classList.remove('open');
}

toggleBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

})