import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Perso } from 'src/app/models/perso.model';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-perso-new',
  templateUrl: './perso-new.page.html',
  styleUrls: ['./perso-new.page.scss'],
})
export class PersoNewPage implements OnInit {

  public perso!: Perso;

  constructor(
    private Perso: FilmService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.perso = new Perso();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Personnage enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tabs/perso']);
      }, 2000);
    });
  }


  add() {
    this.Perso.saveNewFilm(this.perso).subscribe(() => {
      this.perso = new Perso();
      this.presentToast();
    })
  }

}
