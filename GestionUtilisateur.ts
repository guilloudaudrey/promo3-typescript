import {User} from './User';


export class GestionUtilisateur {

    public users:User[] = [];
    

    ajouter(u:User){
        this.users.push(u);
    }

    supprimer(name:string){
        for (let i = 0; i<this.users.length; i++){
            if (this.users[i].pseudo === name){
                this.users.splice(i,1);
            }
        }
    }

    authentifier(pseudo:string, mdp:string){
        for (let u of this.users){
            if(u.pseudo == pseudo && u.mdp == mdp){
return u;

            }
        }
        return null;
        
    }
}

let list = new GestionUtilisateur();

list.ajouter(new User("audrey", "simplon"));
list.ajouter(new User("audrey2", "simplon"));

console.log(list);

list.supprimer("audrey2");

console.log(list);