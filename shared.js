const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');



selectPlanButtons.forEach( (button) => (button.addEventListener('click', () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
})));

noBtn.addEventListener('click', () => {
   closeModal();
});
backdrop.addEventListener('click', () => {
    closeModal();
    mobileNav.style.display = 'none';

});

function closeModal(){
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

toggleBtn.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';

})