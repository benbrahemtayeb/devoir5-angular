import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Equipe } from '../model/equipe.model';
@Injectable({
  providedIn: 'root'
})
export class joueur {
  joueurs : Joueur[];
  Joueur!: Joueur;
  equipes: Equipe[];
  joueursRecherche?: Joueur[];
  constructor(){

    this.equipes=[
      {idEquipe: 1, nomEquipe: "Al Nassr"},
      {idEquipe: 2, nomEquipe: "Inter Miami"},
      {idEquipe: 3, nomEquipe: "Esperance Tunis"},
      {idEquipe: 4, nomEquipe: "Frankfurt"},
      {idEquipe: 5, nomEquipe: "Liverpool"},
      {idEquipe: 6, nomEquipe: "Real Madrid"}
    ];

    this.joueurs=[
      {idJoueur: 1, nomJoueur: "Cristiano Ronaldo", dateTransfert: new Date("3-12-2022"), dureContrat: "2 years", prixJoueur: 12,equipe: {idEquipe: 1, nomEquipe: "Al Nassr"}},
      {idJoueur: 2, nomJoueur: "Lionel Messi", dateTransfert: new Date("07-15-2023"), dureContrat: "1 year", prixJoueur: 18, equipe: {idEquipe: 2, nomEquipe: "Inter Miami"}},
      {idJoueur: 3, nomJoueur: "Youssef Blaili", dateTransfert: new Date("07-28-2024"), dureContrat: "2 years", prixJoueur: 1.70, equipe: {idEquipe: 3, nomEquipe: "Esperance Tunis"}},
      {idJoueur: 4, nomJoueur: "Ellyes Skhiri", dateTransfert: new Date("07-05-2023"), dureContrat: "4 years", prixJoueur: 7.50, equipe: {idEquipe: 4, nomEquipe: "Frankfurt"}},
      {idJoueur: 5, nomJoueur: "Bechir Ben Said", dateTransfert: new Date("07-01-2022"), dureContrat: "3 years", prixJoueur: 0.650, equipe:  {idEquipe: 3, nomEquipe: "Esperance Tunis"}},
      {idJoueur: 6, nomJoueur: "Sadio Mané", dateTransfert: new Date("08-01-2023"), dureContrat: "3 years", prixJoueur: 8, equipe:  {idEquipe: 1, nomEquipe: "Al Nassr"}},
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
  listeEquipes():Equipe[]{
    return this.equipes;
  }
  consulterEquipe(id:number):Equipe{
    return this.equipes.find(equipe=>equipe.idEquipe==id)!;
  }
  rechercherParEquipe(idEqp: number): Joueur[]{
    this.joueursRecherche=[];
    this.joueurs.forEach((cur,index) => {
      if(idEqp==cur.equipe?.idEquipe){
        console.log("cur "+cur);
        this.joueursRecherche?.push(cur);
      }
    });
    return this.joueursRecherche;
  }
  rechercherParNom(nom: string): Joueur[] {
    this.joueursRecherche=[];
    return this.joueurs.filter(j => 
      j.nomJoueur?.toLowerCase().includes(nom.toLowerCase())
    );
  }
}
