import { Component, OnInit, } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { joueur } from '../services/joueur';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-joueurs',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './joueurs.html',
})
export class Joueurs implements OnInit{
  ngOnInit(): void {}
  joueurs?: Joueur[];
  constructor(private joueurService: joueur){
    this.joueurs=joueurService.listeJoueur();
  }
  supprimerJoueur(j: Joueur){
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.joueurService.supprimerJoueur(j);
  }
}
