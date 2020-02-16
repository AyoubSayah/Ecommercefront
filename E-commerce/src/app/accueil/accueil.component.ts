import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../apis/produit.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  produits: any;
  produits2;

  constructor(  private route: ActivatedRoute, private router: Router,
    private api : ProduitService) { }

  ngOnInit() {
    this.produits = this.api.getAll();
    this.produits2 = this.produits
  }


}
