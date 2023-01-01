/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/

// Įtraukiamas "fetch" metodas, kuris leidžia mums gauti duomenis iš API
const url = "https://randomuser.me/api/"

// Pasiruošiamas mygtukas, kurį vartotojas paspaus
const button = document.querySelector('#show-user-button');

// Funkcija, kuri bus iškviečiama po mygtuko paspaudimo
button.addEventListener('click', () => {
  // Gauname vartotojo duomenis iš API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Paimame vartotojo vardą ir pavardę iš duomenų
      const firstName = data.results[0].name.first;
      const lastName = data.results[0].name.last;
      const picture = data.results[0].picture.medium;

      // Sukuriame elementą, kuriame bus rodomas vartotojo vardas ir pavardė
      const userElement = document.createElement('div');
      userElement.innerHTML = `
      <img src="${picture}" alt="Profile picture" />
      <p>${firstName}</p>
       <p>${lastName}</p>
     `;

      // Įtraukiame elementą į dokumentą
      document.body.appendChild(userElement);
    });

  // Paslepiame mygtuką, kad vartotojas negalėtų jį paspausti daugiau kartų
  button.style.display = 'none';
});
