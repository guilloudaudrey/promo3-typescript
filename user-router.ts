import { GestionUtilisateur } from './GestionUtilisateur';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import {User} from './User'





export const userRouter = express.Router();

const gestionutilisateur = new GestionUtilisateur();

userRouter.use('/', bodyParser.json());


userRouter.post('/', (req, res) => {
  
    let name = req.body.name;
    let pass = req.body.pass;
    if (!name || !pass){
        res.status(400);
        res.send("missing parameters");
        return;
    }
    let u = new User(name, pass)
    gestionutilisateur.ajouter(u);
    res.send(u);
});

userRouter.get('/', (req, res) => {
 
    let nouveau = req.body.nouveau;
    gestionutilisateur.ajouter(nouveau);
    res.end('utilisateur ajouté');
});

userRouter.delete('/', (req, res) => {
    let suppr = req.params.suppr;
    gestionutilisateur.supprimer(suppr);
    res.end('todo supprimé');
}); 