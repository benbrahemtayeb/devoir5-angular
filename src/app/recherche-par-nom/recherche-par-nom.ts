import { Component, NgModule, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { joueur } from '../services/joueur';
import { CommonModule } from '@angular/common';
import { Equipe } from '../model/equipe.model';
import { RouterLink } from '@angular/router';
import { SearchFilterPipe } from '../search-filter-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [CommonModule,RouterLink,FormsModule,SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit{
  searchTerm!: string;
  joueurs: Joueur[];
  equipes?: Equipe[];
  idEquipe?: number;
  constructor(private joueurService: joueur){
    this.joueurs=[];
    this.joueurs = this.joueurService.listeJoueur();
  }
  ngOnInit(): void {
    
  }
  onKeyUp(terme: string): void {
    if (terme.trim() === '') {
      this.joueurs = [];
      return;
    }
    this.joueurs = this.joueurService.rechercherParNom(terme);
  }
  supprimerJoueur(j: Joueur){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.joueurService.supprimerJoueur(j);
      this.joueurs=this.joueurService.rechercherParEquipe(this.idEquipe!);
  }
}
