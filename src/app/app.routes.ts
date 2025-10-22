import { Routes } from '@angular/router';
import { Joueurs } from './joueurs/joueurs';
import { AddJoueur } from './add-joueur/add-joueur';
import { UpdateJoueur } from './update-joueur/update-joueur';
import { RechercheParEquipe } from './recherche-par-equipe/recherche-par-equipe';

export const routes: Routes = [
    {path: "joueurs", component:Joueurs}, 
    {path: "add-joueur",component:AddJoueur},
    {path: "", redirectTo:"joueurs", pathMatch: "full"},
    {path: "updateJoueur/:id", component: UpdateJoueur},
    {path: "rechercheParEquipe", component: RechercheParEquipe},
];
