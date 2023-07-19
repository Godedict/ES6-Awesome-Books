/* eslint-disable import/prefer-default-export */
// navigation.js
export const setupNavigation = () => {
  const listLink = document.querySelector('#list-link');
  const addNewLink = document.querySelector('#add-new-link');
  const contactLink = document.querySelector('#contact-link');
  const listSection = document.querySelector('.container-list');
  const addBookSection = document.querySelector('.div-form');
  const contactSection = document.querySelector('.contact');

  listLink.addEventListener('click', () => {
    listSection.classList.remove('hide');
    addBookSection.classList.add('hide');
    contactSection.classList.add('hide');
    listSection.classList.remove('container-list');
  });

  addNewLink.addEventListener('click', () => {
    listSection.classList.add('hide');
    addBookSection.classList.remove('hide');
    contactSection.classList.add('hide');
    listSection.classList.remove('container-list');
  });

  contactLink.addEventListener('click', () => {
    listSection.classList.add('hide');
    addBookSection.classList.add('hide');
    contactSection.classList.remove('hide');
    listSection.classList.remove('container-list');
  });
};
