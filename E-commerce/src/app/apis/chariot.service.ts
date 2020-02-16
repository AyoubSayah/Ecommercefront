
import { Chariot } from './../../chariot';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class ChariotService {

    constructor(private http : HttpClient ,
      private config : ConfigService
      ) { }
  
      url = this.config.hostname;
    getAll2(){
      return this.http.get(this.url+'/chariots')
    }
    createChariot(chariot : Chariot){
      return this.http.post(this.url+'/chariot' , chariot)
    }
  
    deletechariot(id){
      return this.http.delete(this.url+'/chariot/'+id)
    }
    deletechariott(){
      return this.http.delete(this.url+'/chariot')
    }
   
  deletePost(Id: string) {
    this.http.delete("http://localhost:4200/api/chariot/" + Id)
      .subscribe(() => {
        
       
      });
  }
}


  