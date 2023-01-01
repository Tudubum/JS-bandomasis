/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/

 // Gauname nuotraukų elementus ir laukelius, kuriuose bus atvaizduojama kiek kartų buvo paspausta
const happyEmoji = document.getElementById('happyEmoji')
const happyImage_count = document.getElementById('happyImage_count');
  const sadEmoji = document.getElementById('sadEmoji');
  const sadImage_count = document.getElementById('sadImage_count');

  // Pridedame "click" įvykio klausytojus nuotraukoms
  happyEmoji.addEventListener('click', () => {
    // Padidiname skaičių vienetu ir atnaujiname laukelį
    happyImage_count.textContent = parseInt(happyImage_count.textContent) + 1
  });

  sadEmoji.addEventListener('click', () => {
    // Padidiname skaičių vienetu ir atnaujiname laukelį
    sadImage_count.textContent = parseInt(sadImage_count.textContent) + 1
  });