import {AnimalCompagnie} from './animal-compagnie'

export class Chat implements AnimalCompagnie{
nom: string
couleur: string


constructor(nom:string, couleur:string){
    this.nom = nom
    this.couleur = couleur
}

    seGratter(){
        console.log(this.nom + ' se gratte')
    }

    manger(aliment:string){
        console.log(this.nom + ' mange le ' + aliment)
    }

    emettreSon(){
        return 'miaou'
    }
    

    chasser():void{
        console.log('chasse')
    }

    
}