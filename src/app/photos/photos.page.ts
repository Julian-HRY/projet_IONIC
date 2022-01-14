import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  //public photos: picture[] = [];

  constructor(public FilmService: FilmService) { }

  ngOnInit() { 
  }

  // async addnewPhoto(){
  //   const capture =  await Camera.getPhoto({
  //     resultType: CameraResultType.Uri,
  //     source: CameraSource.Camera,
  //     quality: 100
  //   })

    //const saveImageFile = await this.savePicture(capture)

    //this.photos.unshift(saveImageFile)
  // }

  takePhoto(){
    
    this.FilmService.addNewToGallery();
    
  }

}

// export interface picture{
//   filepath:string;
//   webviewPath: string;
// }
