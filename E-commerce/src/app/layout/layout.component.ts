import { Component, OnInit } from '@angular/core';

import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  
  change()
  {
    this.router.navigate(['/accueil'])
  }
  change2()
  {
    this.router.navigate(['/produits'])
  }
  change3()
  {
    this.router.navigate(['/chariot'])
  }
}
