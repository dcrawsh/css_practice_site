const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noBtn = document.querySelector('.modal__action--negative');



selectPlanButtons.forEach( (button) => (button.addEventListener('click', () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
})));

noBtn.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});
backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});