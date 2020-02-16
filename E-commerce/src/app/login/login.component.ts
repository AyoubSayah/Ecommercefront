import { res } from './../validation';


import { Admin } from './../admin';
import { ProduitService } from './../apis/produit.service';
import { AdminService } from './../apis/admin.service';
import { Component, OnInit ,Input} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import * as m from '../validation';
import Swal from 'sweetalert2';


@Component({
  selector: "app-login",
  
  templateUrl: "./login.component.html",
 
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  message: "";
 
  

 
  constructor( private router: Router,
    private apis: AdminService) {
      
    
  }
  
public val : boolean=false;

  loginForm: FormGroup;
  email;
  password;
  show_alert = false;
  admin :Admin ;
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl([Validators.required, Validators.email]),
      password: new FormControl([Validators.required, Validators.minLength(6)])
    });
  }
  save() {
   
    var body = {
      email : this.email , 
      password : this.password
    }
    this.apis.Sign(body)
    .subscribe((data: any)=> {
      console.log(data)
    if (data.message) {
this.message =data.message 
Swal.fire('Erreur', 'Adresse email non existante', 'warning');
this.loginForm.reset();
    } else {
      localStorage.setItem('admin',JSON.stringify(data))
    
      this.router.navigate(['admin/acceuil'])
      
    }
  })
  }


}
