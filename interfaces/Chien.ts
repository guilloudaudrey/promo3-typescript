import {AnimalCompagnie} from './animal-compagnie'

export class Chien implements AnimalCompagnie {

nom:string
race:string

constructor(nom:string, race:string){
    this.nom = nom
    this.race = race
}

    seGratter(){
        console.log(this.nom + ' se gratte')
    }

    manger(aliment:string){
        console.log(this.nom + ' mange ' + aliment)
    }

    emettreSon(){
        
        return 'wouf'
    }

    allerChercher():void{
        console.log(this.nom + ' va chercher')
    }


}