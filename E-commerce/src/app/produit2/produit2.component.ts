import { ChariotService } from './../apis/chariot.service';
import { Chariot } from './../../chariot';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../apis/produit.service';
import Swal from 'sweetalert2';
import { Product } from '../product';
@Component({
  selector: 'app-produit2',
  templateUrl: './produit2.component.html',
  styleUrls: ['./produit2.component.css']
})
export class Produit2Component implements OnInit {

  lea
le=0
  constructor(private api : ProduitService,
    private apis: ChariotService) {
      

     }
  categories = ["Console" , "Jeux Videos" , "Accessoire"];
  produits ;
  produits2 ;
 
  chariot : Chariot=new Chariot()
  ngOnInit() {
  
  //  this.api.getAll().subscribe(resultat =>{
  //    this.produits = resultat;
  //    this.produits2=this.produits;

  //   });




    this.produits = this.api.getAll();
    this.produits2 = this.produits
  
    for (this.lea in this.produits) {
      this.le++ ;

    }
   
    
  }
 
  
  filtre_categorie(value){
   // alert(value)
   this.produits2 = this.produits.filter((o)=> o.categorie == value);
  }
  filtre_ordre(value) {
    alert(value);
    if (value == "asc") {
      this.produits2 = this.produits.sort((a: any, b: any) =>
        a.prix > b.prix ? 0 : -1
      );
    }
    if (value == "desc") {
      this.produits2 = this.produits.sort((a: any, b: any) =>
        a.prix < b.prix ? 0 : -1
      );
    }
  }
ajout(ref1:string ,s : string ,p : Number){
  this.chariot.ref=ref1
  this.chariot.nom=s
  this.chariot.prix=p

  this.apis.createChariot(this.chariot)
        .subscribe(data => {
          console.log(data);
          Swal.fire('ajouté au pannier !', 'message', 'success');
       
        })
}
}
