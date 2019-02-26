const cont = document.querySelector('.js-container');

document.addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.closest('.js-arrow-down')) cont.scrollIntoView({block:'start', behavior:'smooth'});
})