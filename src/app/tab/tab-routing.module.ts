import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [

  {
    path: 'tab',
    component: TabPage,

    children: [
      // {
      //   path: 'films',
      //   loadChildren: () => import('../film-list/film-list.module').then(m => m.FilmListPageModule),

      // },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule),
      },
      {
        path: 'photos',
        loadChildren: () => import('../photos/photos.module').then( m => m.PhotosPageModule)
      },
      {
        path: 'perso',
        loadChildren: () => import('../list-perso/list-perso.module').then( m => m.ListPersoPageModule)
      }
      
    ]
  },
{
  path: '',
  redirectTo:'/tab/home',
  pathMatch:'full'
},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule { }
