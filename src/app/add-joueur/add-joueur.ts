import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { FormsModule } from '@angular/forms';
import { joueur } from '../services/joueur';
import { Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';


@Component({
  selector: 'app-add-joueur',
  imports: [FormsModule],
  templateUrl: './add-joueur.html',
})
export class AddJoueur implements OnInit{
  newJoueur= new Joueur();
  equipes!: Equipe[];
  newIdEquipe!: number;
  newEquipe!: Equipe;
  constructor(private joueurService: joueur,private router :Router){}
  ngOnInit(): void {
    this.equipes=this.joueurService.listeEquipes();
  }
  addJoueur(){
    this.newEquipe=this.joueurService.consulterEquipe(this.newIdEquipe);
    this.newJoueur.equipe=this.newEquipe;
    this.joueurService.ajouterJoueur(this.newJoueur);
    this.router.navigate(['joueurs']);
  }
    
}
