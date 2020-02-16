import { environment } from '../enviroment';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProduitService } from '../apis/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import Swal from 'sweetalert2';
import { EventEmitter } from 'events';
import { AngularFireStorage } from 'angularfire2/storage';

import {finalize} from 'rxjs/operators'
  import { from } from 'rxjs';
import { fromValue } from 'long';
@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  constructor(private apis: ProduitService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage) { }
  categories = ["Jeux vidéo", "Console", "Accessoire"];
  productForm: FormGroup;
  produit: Product = new Product();
  produits: Product[];
  exist: boolean = false;
  reference;
  isNew = true;
  imgSrc : string='/assets/img/az.png';
 selectedImage : any = null ;
 valida;
 url2;
  ngOnInit() {
    
    this.reference = this.route.snapshot.params['ref'];
    if (this.reference) {
      this.isNew = false;
    }
    this.productForm = new FormGroup({
      'ref': new FormControl([Validators.required]),
      'nom': new FormControl([Validators.required]),
      'categorie': new FormControl([Validators.required]),
      'qte': new FormControl([Validators.required]),
      'description': new FormControl([Validators.required]),
      'prix': new FormControl([Validators.required]),
      'url2': new FormControl(),
      'valida':new FormControl([Validators.required]),
    })
    this.apis.getAll()
      .subscribe((data: Product[]) => {
        //en cas de success try
        this.produits = data;
        
        if (!this.isNew) {
          this.produit = this.produits.filter((s) => s.ref == this.reference)[0]
        }
      }, err => {
        //en cas d'erreur 
      })
  }

  testRef() {
    let x = this.produits.filter((s) => s.ref == this.produit.ref)
    if (x.length > 0) {
      this.exist = true;
    } else {
      this.exist = false;
    }
  }

  save() {
    if (this.isNew) {
      this.apis.createProduct(this.produit)
        .subscribe(data => {
          console.log(data);
          Swal.fire('Saved !', 'message', 'success');
          this.router.navigate(['/produits'])
        })
    } else {
      this.apis.updateProduct(this.produit)
        .subscribe(data => {
          console.log(data);
          Swal.fire('Saved !', 'message', 'success');
          this.router.navigate(['/produits'])
        })
    }

    //Swal.fire('Saved !' , 'message' , 'success')
    /* Swal.fire({
       title : 'Are you sure ?',
       text : 'ttt',
       icon : 'warning',
       showCancelButton : true,
       confirmButtonText : 'OK',
       cancelButtonText : 'Cancel'
     }).then((result)=>{
       if(result.value){
         Swal.fire('Deleted' , '' , 'success')
       }else{
         Swal.fire('Canceled' , '' , 'error')
       }
     })*/
    console.log(this.produit)

  }

  delete() {
    Swal.fire({
      title: 'Are you sure ?',
      text: 'ttt',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.apis.deleteProduct(this.produit._id)
          .subscribe(data => {
            Swal.fire('Deleted', '', 'success');
            this.router.navigate(['/produits'])
          })

      } else {
        Swal.fire('Canceled', '', 'error')
      }
    })
  }

  // upload1(e) {
  //   var files = e.target.files;
  //   var file = files[0];
  //   if (files && file) {
  //     var reader = new FileReader();
  //     reader.onload = this.loader.bind(this);
  //     reader.readAsBinaryString(file);
  //   }
  // }
  // loader(readerEvt) {
  //   var binaryString = readerEvt.target.result;
  //   this.produit.image = 'data:image/png;base64,' + btoa(binaryString);
  // }
  upload2(e1){
  
  if(e1.target.files&& e1.target.files[0]){
    const reader=new FileReader(); 
    reader.onload=(e:any)=>this.imgSrc=e.target.result;
  reader.readAsDataURL(e1.target.files[0]);
  this.selectedImage=e1.target.files[0];}
  else {
    this.imgSrc='/assets/img/az.png';
    this.selectedImage=null;
  }
 var filepath =`images/${this.selectedImage.name}_${new Date().getTime()}`;
 const fileRef= this.storage.ref(filepath);
this.storage.upload(filepath,this.selectedImage).snapshotChanges().pipe(
  finalize(()=>{
    fileRef.getDownloadURL().subscribe((url)=>{
 this.url2=url 
 this.produit.url2=this.url2;
    })
  })
).subscribe();
}
}