'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModels = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closelModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModels.length; i++) {
  btnsOpenModels[i].addEventListener('click', openModal);
}

btnCloseModel.addEventListener('click', closelModal);
overlay.addEventListener('click', closelModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closelModal();
  }
});
