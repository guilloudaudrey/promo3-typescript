import { GestionUtilisateur } from './GestionUtilisateur';
import * as express from 'express';

const gestionutilisateur = new GestionUtilisateur();
/*
On utilise un Router pour regroupe toutes les routes
d'un type particulier, ici, notre router regroupera 
les routes liées au Todo's
*/
export const router = express.Router();

//Route permettant de récupérer les todo
//router.get('/', (req, res) => res.json(todo.lister()));

//Route permettant d'ajouter un todo
router.post('/', (req, res) => {
    let nouveau = req.body.nouveau;
    gestionutilisateur.ajouter(nouveau);
    res.end('utilisateur ajouté');
});
//Route peremettant de supprimer un todo
router.delete('/:suppr', (req, res) => {
    let suppr = req.params.suppr;
    gestionutilisateur.supprimer(suppr);
    res.end('todo supprimé');
});