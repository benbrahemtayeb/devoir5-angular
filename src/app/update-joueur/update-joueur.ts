import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { joueur } from '../services/joueur';


@Component({
  selector: 'app-update-joueur',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-joueur.html',
  styles: ``
})
export class UpdateJoueur implements OnInit{
  currentJoueur=new Joueur;
  constructor(private activatedRoute: ActivatedRoute,private router :Router, private joueurService: joueur){}
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentJoueur=this.joueurService.consulterJoueur(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentJoueur);
  }
  updateJoueur(){
    this.joueurService.updateJoueur(this.currentJoueur);
    this.router.navigate(['joueurs']);
  }
}
