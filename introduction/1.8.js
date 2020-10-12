const readlineSync = require("readline-sync");

let country = readlineSync.question('In wich country are you living?');
let mois = readlineSync.question('Enter a month!');
let année = readlineSync.question('Enter a year!');

console.log("Le gouvernement de " + country + " vient de décider qu au 1er " + mois + " de cette " + année + ", sur tout le territoire, les automobiles devront rouler à gauche, non plus à droite. Si l’expérience est concluante, à partir du 1er février la mesure sera adoptée pour les camions…");

