import { Admin } from './../admin';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
@Injectable({providedIn: 'root'})
    export class AdminService {

url = this.config.hostname;
constructor(private http: HttpClient, private config: ConfigService) {}

Sign(admin){

return this.http.post(this.url+'/authentification',admin)
}
        
    singup(admin_body : Admin){
        return this.http.post(this.url+'/inscription',admin_body)   }
    }