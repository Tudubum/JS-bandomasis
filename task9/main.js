/*
  Sukurkite klasę, kuri priima 4 savybes ir turi 2 metodus.
  Savybės: masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai.
  Metodai:
    1 metodas tikrina ar mašina brangesnė negu 10 000 eurų ir grąžina true|false.
    2 metodas tikrina ar mašina senesnė negu 2010 ir grąžina mašinos amžių ir tekstą "Antikvaras"|"Šviežiena".
*/

class Masina{

  constructor(masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai){
    this.masinosMarke = masinosMarke;
    this.masinosModelis = masinosModelis;
    this.masinosKaina = masinosKaina;
    this.masinosGamybosMetai = masinosGamybosMetai;
  }

  metodas1(masinosKaina){
    return this.masinosKaina > 10000;

  }

  metodas2(masinosGamybosMetai){
    if ( this.masinosGamybosMetai < 2010){
      return this.masinosGamybosMetai + " Antikvariatas"
    } else{
      return this.masinosGamybosMetai + " Svieziena"
    }
  }

}

let masinuInfo = [
  new Masina("Audi", "A6", "15000", 2015)
]

console.log(masinuInfo[0].metodas1()); // true
console.log(masinuInfo[0].metodas2()); // 2015 Svieziena