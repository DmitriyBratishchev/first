
(function(){
  'use strict'

  const getList = [...JSON.parse(localStorage.baseData)];

  const listV = document.querySelectorAll('.vacancy-item');
  listV.forEach.call(listV, (item) => {
    item.addEventListener("focus", showSelection)
  });

  const head = document.querySelector('.vacancy-detail-selected-head');
  const place = document.querySelector('.vacancy-detail-selected-place');
  const text = document.querySelector('.vacancy-detail-text');
  const idFirst = document.querySelector('.vacancy-item').getAttribute('data-vacancy-id');

  showSelection();
  function showSelection( el ) {
    let idFocus = el?.target?.getAttribute('data-vacancy-id') || idFirst;
    let selectedVacancy = getList.find( (element) => element.id == idFocus );
    
    listV.forEach.call(listV, (item) => {
      item.classList.toggle('vacancy-active', item.getAttribute('data-vacancy-id') === idFocus)
    });

    head.innerHTML = selectedVacancy.vacancyName;
    place.innerHTML = selectedVacancy.place;
    text.innerHTML = selectedVacancy.text;
  }
})() 