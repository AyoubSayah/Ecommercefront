import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.css']
})
export class Layout2Component implements OnInit {

  
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
 
  change()
  {
    this.router.navigate(['/admin/acceuil'])
  }
  change2()
  {
    this.router.navigate(['/admin/produits'])
  }
}

