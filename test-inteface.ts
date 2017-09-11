import { AnimalCompagnie } from './interfaces/animal-compagnie'
import { Chien } from './interfaces/Chien'
import { Chat } from './interfaces/Chat'

const animaux: AnimalCompagnie[] = []

animaux.push(new Chat('felix', 'noir'))
animaux.push(new Chien('fido', 'corgi'))

for (let animal of animaux){
    animal.manger('la pâtée')
    console.log(animal.emettreSon());
    animal.seGratter();
}