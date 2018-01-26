import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-listmedia',
  templateUrl: './listmedia.component.html',
  styleUrls: ['./listmedia.component.scss']
})
export class ListmediaComponent implements OnInit {

  tervehdys: string;
    kaikkiMedia: any;
  mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';
    constructor(private mediaService: MediaService) { }
  ngOnInit() {
    this.tervehdys = this.mediaService.testi;
    this.mediaService.getAllMedia().subscribe(data => {
      this.kaikkiMedia = data;
      // Mapin ja Foreachin ero on että palauttaa alkuperäisen taulun myös
      this.kaikkiMedia.map(media => {
          const temp2 = media.filename.split('.');
          const newName = temp2[0] + '-tn320.png';
          media.thumbnail = newName;
      });
      /*
      for ( let loop of this.kaikkiMedia) {
          const temp2 = loop.filename.split('.');
          const newName = temp2[0] + '-tn320.png';
          loop.thumbnail = newName;
      }
      */
      console.log(this.kaikkiMedia);
    });


  }

}
