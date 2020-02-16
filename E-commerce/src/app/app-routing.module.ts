import { FinComponent } from './fin/fin.component';
import { ChariotComponent } from './chariot/chariot.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ProduitsComponent } from './produits/produits.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { Layout2Component } from './layout2/layout2.component';
import { Produit2Component } from './produit2/produit2.component';
import { AcceuillComponent } from './acceuill/acceuill.component';


const routes: Routes = [
 
  {
    path : 'login',
    component : LoginComponent
  },
  {  path : 'admin',
    component : Layout2Component,
    children : [{
    path : 'inscri',
    component : InscriptionComponent
  },
 {
  path: 'acceuil',
 component : AcceuillComponent
},
{
  path : 'produits',
  component : ProduitsComponent
  
},
{
  path : 'edit/:ref',
  component : AjoutProduitComponent
},
{
  path : 'ajout',
  component : AjoutProduitComponent
},
{
  path : 'details/:ref',
  component : DetailProduitComponent
}
  
    ]
  },

{
   path : '',
    component : LayoutComponent,
    children : [
     { 
       path : 'inscri',
       component : InscriptionComponent
     },
      {
        path : 'accueil',
        component : AccueilComponent
      },
      {
        path : 'produits',
        component : Produit2Component
      },
      {
        path : 'chariot',
        component: ChariotComponent

      },
      {path : 'fin',
      component : FinComponent

      },
      {
        path : 'details/:ref',
        component : DetailProduitComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
