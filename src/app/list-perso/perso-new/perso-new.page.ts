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
        this.router.navigate(['/tab/perso']);
      }, 2000);
    });
  }


  add() {
    let input = document.documentElement.getElementsByTagName('input');
    let count = 0;
    

    for (let i = 0; i < input.length; i++) {
      if(input[i].value != ''){
        count ++;
        input[i].placeholder = '';
        input[i].style.color = 'white';
      }
      else{
        input[i].placeholder = 'Remplir ce champ';
        input[i].style.color = 'red';
      }
    }
    console.log(input.length +' ' + count);

    if (input.length == 8) {
      count --;
    }

    if(count == input.length-1){
      this.Perso.saveNewFilm(this.perso).subscribe(() => {
        this.perso = new Perso();
        this.presentToast();
      })
    }
    
  }

}
