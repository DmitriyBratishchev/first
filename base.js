

(function(){

  'use strict'

  let baseData = [];

  for( let i = 1; i < 5; i++) {
    let vacancyName = `Програмист Backend ${i}`;

    let place = `<p>москва ${i}</p>`

    let text = `<h2>заголовок1 ${i}</h2>
  <p>lorem ${i}</p>
  <p>lorem ${i}</p>
  <h2>заголовок2 ${i}</h2>
  <p>lorem*2 ${i}</p>`;
    let item = {};
    item.id = i;
    item.vacancyName = vacancyName;
    item.place = place;
    item.text = text;
    baseData.push(item)
  }

  localStorage.baseData = JSON.stringify(baseData);
})();