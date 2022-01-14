import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FilmService } from './film.service';

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

//import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase), AngularFireModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },FilmService],
  bootstrap: [AppComponent],
})
export class AppModule {}
