import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { joueur } from '../services/joueur';
import { Equipe } from '../model/equipe.model';


@Component({
  selector: 'app-update-joueur',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-joueur.html',
  styles: ``
})
export class UpdateJoueur implements OnInit{
  currentJoueur=new Joueur;
  equipes!: Equipe[];
  updatedEquipeId?: number;
  constructor(private activatedRoute: ActivatedRoute,private router :Router, private joueurService: joueur){}
  ngOnInit(): void {
    this.equipes=this.joueurService.listeEquipes();
    this.currentJoueur=this.joueurService.consulterJoueur(this.activatedRoute.snapshot.params['id']);
    this.updatedEquipeId=this.currentJoueur.equipe?.idEquipe;
    
  }
  updateJoueur(){
    this.currentJoueur.equipe=this.joueurService.consulterEquipe(this.updatedEquipeId!);
    this.joueurService.updateJoueur(this.currentJoueur);
    this.router.navigate(['joueurs']);
  }
}
