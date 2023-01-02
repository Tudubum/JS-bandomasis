/*
  Sutvarkykite 10 užduoties failų kodą taip, kad veiktų main.js parašytas kodas.
*/

import { asmuo1 } from './scripts/data.js';
import { asmuo2 } from './scripts/data.js';
import { asmuo3 } from './scripts/data.js';
import { asmuo4 } from './scripts/data.js';
import { asmuo5 } from './scripts/data.js';
import { asmuo6 } from './scripts/data.js';
import { vardoIlgis } from './scripts/vardoIlgis.js';
import { lytis } from './scripts/lytis.js';
import { pilnametyste } from './scripts/pilnametyste.js';
let pirmas = vardoIlgis(asmuo1);
let antras = lytis(asmuo2);
let trecias = pilnametyste(asmuo3);
let ketvirtas = vardoIlgis(asmuo4);
let penktas = lytis(asmuo5);
let sesi = pilnametyste(asmuo6);

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log(sesi);