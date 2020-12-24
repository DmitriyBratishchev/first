
(function(){
  'use strict'

  let getList = [...JSON.parse(localStorage.baseData)];

  let listV = document.querySelectorAll('.vacancy-item');
  listV.forEach.call(listV, (item) => {
    item.addEventListener("focus", showSelection)
  });

  document.querySelector('.vacancy-item').focus();

  function showSelection(el) {
    let idFocus = el.target.id;
    let selectedVacancy = getList.filter( (element) => element.id == idFocus )
    document.querySelector('.vacancy-detail-selected-head').innerHTML = selectedVacancy[0].vacancyName;
    document.querySelector('.vacancy-detail-selected-place').innerHTML = selectedVacancy[0].place;
    document.querySelector('.vacancy-detail-text').innerHTML = selectedVacancy[0].text;
  }
})()