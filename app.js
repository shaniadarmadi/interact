var modalOpen = document.querySelector('.modal-open');
var modalClose = document.querySelector('.modal-close');
var modal = document.querySelector('.modal');

modalOpen.addEventListener('click', function(){
  modal.classList.remove('modal-closed');
})

modalClose.addEventListener('click', function(){
  modal.classList.add('modal-closed');
})
