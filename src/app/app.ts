import { Component, OnInit, signal } from '@angular/core';
import { Song } from './interfaces/song';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{


  
  protected readonly title = signal('EXAMPLE_APP');

  constructor(){
    this.actualSongs = this.getNextSongFromPlaylist();
  }

  
  lastSongs : Song[] = [
    {
      name : "Science Fiction",
      artist : "Arctic Monkeys",
      url_center: "https://picsum.photos/200",
      url_media: "/science-fiction-audio.mp3"
    },
    {
      name : "Amar como tu",
      artist : "Steven Universe",
      url_center: "https://picsum.photos/200",
      url_media: "/amar-como-tu.mp3"
    },{
      name : "Surf",
      artist : "Mac miller",
      url_center: "https://picsum.photos/200",
      url_media: "Surf.mp3"
    },{
      name : "Science Fiction",
      artist : "Arctic Monkeys",
      url_center: "https://picsum.photos/200",
      url_media: "science-fiction-audio.mp3"
    }

  ]

 

  nextSongs : Song[] = []
  actualSongs : Song;

   ngOnInit(): void {
    
  }


   changeSong(value: boolean){

    if(value){
        if(this.nextSongs.length == 0){
          return;

          this.lastSongs.push(this.actualSongs);
          this.actualSongs = this.getNextSongFromPlaylist();
         
        }else{
          if(this.lastSongs.length == 0 )
            return;

          this.nextSongs.push(this.actualSongs);
          this.actualSongs = this.getNextSongFromPlaylist();
        }

    if(this.actualSongs !== undefined){
        alert("La cancion no ha podido cargarse por algun motivo")
      }
    }

  
  }

  getLastSongFromPlaylist():Song{
    let possible_song = this.lastSongs.pop()
    if(possible_song !== undefined)
      return possible_song;
  else{
    return{
      name : "Science Fiction",
      artist : "Arctic Monkeys",
      url_center: "https://picsum.photos/200",
      url_media: "/science-fiction-audio.mp3"
    }
  }

}
    getNextSongFromPlaylist():Song{
    let possible_song = this.nextSongs.pop()
    if(possible_song !== undefined)
      return possible_song;
  else{
    return{
      name : "Science Fiction",
      artist : "Arctic Monkeys",
      url_center: "https://picsum.photos/200",
      url_media: "/science-fiction-audio.mp3"
    }
  }

}


    
  }











