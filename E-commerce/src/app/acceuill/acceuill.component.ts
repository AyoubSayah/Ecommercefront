import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../apis/produit.service';

@Component({
  selector: 'app-acceuill',
  templateUrl: './acceuill.component.html',
  styleUrls: ['./acceuill.component.css']
})
export class AcceuillComponent implements OnInit {

  produits: any;
  produits2;

  constructor(  private route: ActivatedRoute, private router: Router,
    private api : ProduitService) { }

  ngOnInit() {
    this.produits = this.api.getAll();
    this.produits2 = this.produits
  }

}