
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../apis/produit.service';
import { Admin } from '../admin';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {

  constructor(private api : ProduitService,
    private route: ActivatedRoute,
    private router: Router) { }
  categories = ["Console" , "jeux vidéo" , "accessoire"];
  produits ;
  produits2 ;
  admin : Admin

  ngOnInit() {
    this.admin=JSON.parse(localStorage.getItem('admin'))
if (!this.admin){
  this.router.navigate(['/login'])
}

   

    this.produits = this.api.getAll();
    this.produits2 = this.produits
  

  }
  
  
  filtre_categorie(value){
   // alert(value)
   this.produits2 = this.produits.filter((o)=> o.categorie == value);
  }
  filtre_ordre(value){
    //alert(value)
    if(value=="asc"){
      this.produits2 = this.produits.sort((a : any , b : any)=> a.prix > b.prix ? 0 : -1)
    }
    if(value=="desc"){
      this.produits2 = this.produits.sort((a : any , b : any)=> a.prix < b.prix ? 0 : -1)
    }
  }

}
