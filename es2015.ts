//le let est une variable de block qui n'existera que dans le block
let variableScope = "bloup";

//une variable const est une variable read-only qui ne pourra pas être redéfinie
const variableConstante:string ="blip";

if(true){
    let variableScope = "blip";
    console.log(variableScope); //blip
}

console.log(variableScope); //bloup

// fat arrow functions

let monTableau:string[] = [];

monTableau.filter(function(valeur){
    return valeur === 'bloup';
});

//la même chose

monTableau.filter((valeur) => valeur === 'bloup');

monTableau.filter((valeur) =>{
    return valeur === 'bloup';
});

import {MaClasse} from './ma-classe';