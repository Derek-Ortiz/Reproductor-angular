import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EXAMPLE_APP');


  lastSongs : any[] = [
    {
      name : "Science Fiction",
      artist : "Arctic Monkeys",
      url: "https://picsum.photos/200",
      media: "science-fiction-audio.mp3"
    },
    {
      name : "Amar como tu",
      artist : "Steven Universe",
      url: "https://picsum.photos/200",
      media: "amar-como-tu.mp3"
    },{
      name : "Surf",
      artist : "Mac miller",
      url: "https://picsum.photos/200",
      media: "Surf.mp3"
    },{
      name : "Science Fiction",
      artist : "Arctic Monkeys",
      url: "https://picsum.photos/200",
      media: "science-fiction-audio.mp3"
    }

  ]
  nextSongs : any[] = []
  actualSongs : any | undefined = undefined;



  changeSong(value: boolean){

    if(value){
      this.nextSongs.push(this.actualSongs);
      this.actualSongs = this.lastSongs.pop();

    }else{
      this.lastSongs.push(this.actualSongs);
      this.actualSongs = this.nextSongs.pop();
    }
  }
    
  }











