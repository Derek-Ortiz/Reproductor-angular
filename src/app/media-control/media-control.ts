import { Component, Input, output, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-media-control',
  standalone: false,
  templateUrl: './media-control.html',
  styleUrl: './media-control.css'
})
export class MediaControl implements OnInit, OnDestroy, OnChanges {

  @Input({ required: true })
  song : any;

  isPlaying : boolean = false;
  requestSong = output<boolean>();
  private progressInterval: any; 

  ngOnInit() {
   
    this.setupAudioEvents();
  }

  ngOnDestroy() {
   
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    
    if (changes['song'] && changes['song'].currentValue) {
      this.setupNewSong();
    }
  }

  
  private setupAudioEvents() {
    const audio = document.getElementById("media") as HTMLAudioElement;
    if (audio) {
      
      audio.addEventListener('loadedmetadata', () => {
        this.updateProgressBar();
      });
      
      
      audio.addEventListener('ended', () => {
        this.isPlaying = false;
        document.getElementById("play")!.innerHTML = "play";
        this.stopProgressUpdate();
      });
    }
  }

  
  private setupNewSong() {
    
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    
    
    setTimeout(() => {
      const audio = document.getElementById("media") as HTMLAudioElement;
      if (audio) {
        
        audio.load();
        
        
        audio.addEventListener('canplay', () => {
          this.isPlaying = true;
          document.getElementById("play")!.innerHTML = "pause";
          audio.play();
          this.startProgressUpdate();
        }, { once: true });
      }
    }, 100);
  }

  
  private updateProgressBar() {
    const audio = document.getElementById("media") as HTMLAudioElement;
    const progress = document.getElementById("progress") as HTMLInputElement;
    
    if (audio && progress && !isNaN(audio.duration)) {
      
      progress.max = audio.duration.toString();
      
      progress.value = audio.currentTime.toString();
    }
  }

  
  private startProgressUpdate() {
    this.stopProgressUpdate(); 
    this.progressInterval = setInterval(() => {
      this.updateProgressBar();
    }, 500); 
  }

  
  private stopProgressUpdate() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  
  nextSong(){
    this.requestSong.emit(true);
  }
  
  
  lastSong(){
    this.requestSong.emit(false);
  }

  
  PlayPause(){
    const audio = document.getElementById("media") as HTMLAudioElement;
    const playButton = document.getElementById("play")!;
    
    if (!audio) return; 
    
    if(this.isPlaying){
      
      this.isPlaying = false;
      playButton.innerHTML = "play";
      audio.pause();
      this.stopProgressUpdate();
    }
    else{
     
      this.isPlaying = true;
      playButton.innerHTML = "pause";
      audio.play(); 
      this.startProgressUpdate();
    }
  }

  
  seekAudio(event: any) {
    const audio = document.getElementById("media") as HTMLAudioElement;
    if (audio && !isNaN(audio.duration)) {
      
      audio.currentTime = event.target.value;
    }
  }

}
