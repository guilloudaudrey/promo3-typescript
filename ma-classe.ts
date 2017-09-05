export class MaClasse{
    private maPropriete:string;

    //méthode de construction équivalente à __construct
    constructor(){
this.maPropriete = 'bloup';
    }

    methode(){
        return 'la propriété vaut :' + this.maPropriete; 
    }
}