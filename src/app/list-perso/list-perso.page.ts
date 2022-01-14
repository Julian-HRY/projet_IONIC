import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Perso } from '../models/perso.model';

@Component({
  selector: 'app-list-perso',
  templateUrl: './list-perso.page.html',
  styleUrls: ['./list-perso.page.scss'],
})
export class ListPersoPage implements OnInit {

  Persos!:any;
  
  constructor(private Perso : FilmService
  ) { }

  ngOnInit():void {
    this.Perso.getAllPerso().subscribe((data: any) =>{
      this.Persos = data;
    })
  }

}
