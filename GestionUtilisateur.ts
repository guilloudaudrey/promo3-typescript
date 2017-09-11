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

