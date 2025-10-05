import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';

@Injectable({
  providedIn: 'root'
})
export class joueur {
  joueurs : Joueur[];
  Joueur!: Joueur;
  constructor(){
    console.log("Création du service Joueur!");
    this.joueurs=[
      {idJoueur: 1, nomJoueur: "Cristiano Ronaldo", nomEquipe: "Al Nassr", dateTransfert: new Date("3-12-2022"), dureContrat: "2 years", prixJoueur: 12},
      {idJoueur: 2, nomJoueur: "Lionel Messi", nomEquipe: "Inter Miami", dateTransfert: new Date("07-15-2023"), dureContrat: "1 year", prixJoueur: 18},
      {idJoueur: 3, nomJoueur: "Youssef Blaili", nomEquipe: "Esperance Tunis", dateTransfert: new Date("07-28-2024"), dureContrat: "2 years", prixJoueur: 1.70},
      {idJoueur: 4, nomJoueur: "Ellyes Skhiri", nomEquipe: "Frankfurt", dateTransfert: new Date("07-05-2023"), dureContrat: "4 years", prixJoueur: 7.50},
    ];
  }
  listeJoueur():Joueur[]{
    return this.joueurs;
  }
  ajouterJoueur(joueur : Joueur){
    this.joueurs.push(joueur);
  }
  supprimerJoueur( j: Joueur){
    const index = this.joueurs.indexOf(j, 0);
    if (index > -1) {
      this.joueurs.splice(index, 1);
    }
    //ou Bien
    /* this.Joueurs.forEach((cur, index) => {
    if(prod.idJoueur === cur.idJoueur) {
      this.Joueurs.splice(index, 1);
    }
    }); */
  }
  consulterJoueur(id:number): Joueur{
    return this.Joueur=this.joueurs.find(p=>p.idJoueur==id)!;
  }
  updateJoueur(j: Joueur){
    const index = this.joueurs.indexOf(j, 0);
    if (index > -1) {
      this.joueurs.splice(index, 1); 
      this.joueurs.splice(index, 0, j);
    }
  }
  
}
