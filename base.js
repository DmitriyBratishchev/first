

(function(){

  'use strict'

  const baseData = [];

  for( let i = 1; i < 5; i++) {
    const vacancyName = `Програмист Backend ${i}`;

    const place = `<p>москва ${i}</p>`;

    const text = `<h2>заголовок1 ${i}</h2>
  <p>lorem ${i}</p>
  <p>lorem ${i}</p>
  <h2>заголовок2 ${i}</h2>
  <p>lorem*2 ${i}</p>`;
    
    const item = { id: i, vacancyName, place, text }
    baseData.push(item)
  }

  localStorage.baseData = JSON.stringify(baseData);
})();