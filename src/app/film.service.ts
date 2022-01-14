import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Perso } from './models/perso.model';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})


export class FilmService {
  private dbPath = '/perso';
  persoRef: AngularFirestoreCollection<Perso>;
  public photos: UserPhoto[] = [];
  

  constructor(
    private db: AngularFirestore
  ) {
    this.persoRef = db.collection(this.dbPath);
   }

   getAllPerso(): any {
    return this.persoRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewFilm(perso: Perso): any {
    return new Observable(obs => {
      this.persoRef.add({...perso}).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.persoRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(perso: Perso) {
    return new Observable(obs => {
      this.persoRef.doc(perso.id).update(perso);
      obs.next();
    });
  }

  delete(id: any) {
    this.persoRef.doc(id).delete();
  }





  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);
  }

  private async savePicture(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);
  
    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
    
    console.log('passe par la')
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;
  }
  
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
