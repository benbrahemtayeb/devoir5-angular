import { Equipe } from "./equipe.model";
export class Joueur{
    idJoueur?: number;
    nomJoueur?: string;
    dateTransfert?: Date;
    dureContrat?: string;
    prixJoueur?: number;
    equipe?: Equipe;
}