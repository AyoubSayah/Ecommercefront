
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{environment} from './enviroment';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ProduitsComponent } from './produits/produits.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InscriptionComponent } from './inscription/inscription.component';

import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { Produit2Component } from './produit2/produit2.component';
import { Layout2Component } from './layout2/layout2.component';
import { AcceuillComponent } from './acceuill/acceuill.component';
import { ChariotComponent } from './chariot/chariot.component';
import { FinComponent } from './fin/fin.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    LayoutComponent,
    ProduitsComponent,
    AjoutProduitComponent,
    DetailProduitComponent,
    AccueilComponent,
    InscriptionComponent,
    
    ViewdetailComponent,
    Produit2Component,
    Layout2Component,
    AcceuillComponent,
    ChariotComponent,
    FinComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
              
            }
        }),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
      AngularFireDatabaseModule,
      FontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
