import {User} from './User';
import {GestionUtilisateur} from './GestionUtilisateur'


let list = new GestionUtilisateur();


list.ajouter(new User("audrey", "simplon"));
list.ajouter(new User("audrey2", "simplon"));
if (list.users.length !=2){
    console.error("expects 2 users");
    //code d'erreur
    process.exit(1);
}

list.supprimer("audrey2");
if (list.users.length !=1){
    console.error("expects 1 user got" + list.users.length)
    process.exit(1);
}

let u = list.authentifier("audrey", "simplon");
if (u.pseudo != "audrey" || u.mdp != "simplon"){
    console.error("expects user audrey got " + u.pseudo);
    process.exit(1);
}