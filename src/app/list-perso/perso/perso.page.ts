import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.page.html',
  styleUrls: ['./perso.page.scss'],
})
export class PersoPage implements OnInit {

  modif!: boolean;
  perso: any = null;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Perso: FilmService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Perso.get(id).subscribe((value: any) => {
      this.perso = value;
    });
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Etes-vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Confirmer',
            handler: () => { this.modif = !this.modif}
          }
        ]
      });
  
      await alert.present();
    } else {
    this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {

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
    
    if (input.length == 8) {
      count --;
    }
    
    if(count == input.length-1){
      
      this.Perso.update(this.perso).subscribe(() => {
        this.presentToast();
        this.modif = false;
      });
    }
    
  }

  onDelete(id: any) {

   this.Suppr(id);
  }

  async Suppr(id){
    const alert = await this.alertCtrl.create({
      header: 'Etes-vous sur de vouloir modifier ?',
      subHeader: 'Vous rendrez possible la modification',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        }, {
          text: 'Confirmer',
          handler: () => {
            this.Perso.delete(id);
            this.router.navigate(['/tab/perso'])

          }
        }
      ]
    });
    await alert.present();
  }

}
