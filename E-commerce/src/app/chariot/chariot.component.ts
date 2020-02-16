import { element } from 'protractor';
import { Chariot } from './../../chariot';
import { ChariotService } from './../apis/chariot.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.css']
})
export class ChariotComponent implements OnInit {
 public chariot2;
  chariot: any;
  public solde =0;
  


  constructor(private apis : ChariotService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    
  

    this.chariot= this.apis.getAll2();
    this.chariot2 = this.chariot
  }
cal(s : number):number{
  
this.solde= this.solde+s
return this.solde ;
}

change()
{
  this.router.navigate(['/fin'])
}
}



