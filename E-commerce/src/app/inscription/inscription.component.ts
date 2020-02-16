import { AdminService} from './../apis/admin.service';
import { Admin } from './../admin';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent  implements OnInit {
  registerForm: FormGroup;
  admin: Admin = new Admin();
  message = "";
  show_alert = false;

  constructor(public translate: TranslateService,
              private apis: AdminService,
              private router: Router) {}



  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl([
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl([Validators.required, Validators.minLength(3)]),

      email: new FormControl([Validators.required, Validators.email]),
      password: new FormControl([Validators.required, Validators.minLength(6)])
    });
  }

  register()
  {
      console.log(this.admin);
      this.apis.singup(this.admin)
      
     .subscribe((data: any ) => {
          
      if (data.message) {
                       this.message = data.message; }else 
                       {this.router.navigate(['/login']) }

     })
  }      
  
}        