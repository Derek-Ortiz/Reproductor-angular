import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Player } from './player/player';
import { AudioController } from './audio-controller/audio-controller';
import { Search } from './search/search';
import { SearchItems } from './search-items/search-items';

const routes: Routes = [
  {
    path: '',
    component:Player,
    title: 'PlayerMusic'
  },
  {
    path:'controller',
    component: AudioController
  },
  {
    path:'view',
    loadChildren: () => import('./test/test-module').then(m => m.TestModule)
  },{
    path: 'search',
    component: SearchItems,
    title:'Search-bar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
