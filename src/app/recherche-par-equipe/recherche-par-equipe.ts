import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { joueur } from '../services/joueur';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-recherche-par-equipe',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './recherche-par-equipe.html',
})
export class RechercheParEquipe implements OnInit{
  joueurs?: Joueur[];
  equipes?: Equipe[];
  idEquipe?: number;
  constructor(private joueurService: joueur){};
  ngOnInit(): void {
    this.joueurs=[];
    this.equipes=this.joueurService.listeEquipes();
  }
  onChange(){
    console.log(this.idEquipe);
    this.joueurs=this.joueurService.rechercherParEquipe(this.idEquipe!);
  }
  supprimerJoueur(j: Joueur){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.joueurService.supprimerJoueur(j);
      this.joueurs=this.joueurService.rechercherParEquipe(this.idEquipe!);
  }
}
