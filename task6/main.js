/*
  Parašyti JS kodą, kuris turėtų funkciją.
  Funkcija kaip argumentą priima masyvą. Funkcija grąžina skaičių.
  Funkcija turi suskaičiuoti, koks yra vartotojų mašinų gamybos metų vidurkis.
*/

const asmenys = [
  { id: '1', name: 'Petras', masina: "Ford", masinosGamybosMetai: 1990},
  { id: '2', name: 'Jonas', masina: "Audi", masinosGamybosMetai: 1995 },
  { id: '3', name: 'Rokas', masina: "Fiat", masinosGamybosMetai: 2001 },
  { id: '4', name: 'Tomas', masina: "Peugeot", masinosGamybosMetai: 2005 },
  { id: '5', name: 'Sima', masina: "Audi", masinosGamybosMetai: 1996 },
  { id: '6', name: 'Kamilė', masina: "BMW", masinosGamybosMetai: 1999 },
  { id: '7', name: 'Aloyzas', masina: "Honda", masinosGamybosMetai: 2010 }
];


function skaiciuojamVidurki (asmenys) {
  let suma = 0; // sis uzrasas naudojamas norint pradeti sumuoti funckijos rezulta
  // sukam cikla per masyva
  for(let i = 0; i < asmenys.length; i++){
    // su kiekvienu ciklu sumuojame gamybos metus
    suma += asmenys[i].masinosGamybosMetai;
  }

  // gauta sumos rezultata daliname is masinu masyvo ilgio
  return suma/asmenys.length;
}

console.log(skaiciuojamVidurki(asmenys));
