import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-info-song',
  standalone: false,
  templateUrl: './info-song.html',
  styleUrl: './info-song.css'
})
export class InfoSong {

  @Input({ required: true })
  song : any;


  // song_input = input();
  // song = computed(()=> this.song_input);


  // song : any
  
  // constructor(){
  //   this.song = {
  //     name : "Cancion por medio de codigo",
  //     artist : "Nombre del artista",
  //     url: "https://picsum.photos/200"
  //   };
  // }

}
