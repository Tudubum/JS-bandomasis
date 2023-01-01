/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/


function getData(){
// Gauname duomenis iš data.json failo
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Paimame filmų ir aktorių sąrašą iš duomenų
    // sukuriame filmu sarasa
    const movieList = document.getElementById('movieList');


    // sukam cikla per visus filmus esancius data.json masyve
    data.movies.forEach( movie => {
      // sukuriame saraso elementa li
      const movieElement = document.createElement('li');

      // sukuriame textNode su filmo pavadinimu bei aktoriaus vardu bei pavarde
      const movieText = document.createTextNode(`${movie.title} - ${movie.castAndCrew.actors[0].name}`);

      // pridedadme TextNode prie li elemento
      movieElement.appendChild(movieText);

      // pridedame li elementa prie movieList div'o
      movieList.appendChild(movieElement);
    })

  })};

  // sukuriame eventListeneri window objektui, kad iskviestu funkcija getData, iskart kai puslapis uzsikraus
  window.addEventListener('load', getData);