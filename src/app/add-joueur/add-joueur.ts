import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { FormsModule } from '@angular/forms';
import { joueur } from '../services/joueur';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-joueur',
  imports: [FormsModule],
  templateUrl: './add-joueur.html',
})
export class AddJoueur implements OnInit{
  ngOnInit(): void {}
  constructor(private joueurService: joueur,private router :Router){}
  newJoueur= new Joueur();
  addJoueur(){
    this.joueurService.ajouterJoueur(this.newJoueur);
    this.router.navigate(['joueurs']);
  }
    
}
