import { Component, OnInit } from '@angular/core';

//Services
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  term: string = "";
  constructor( private _spotifyService: SpotifyService) { }

  ngOnInit() { }

  searchArtist() {
    this._spotifyService.getArtistas( this.term )
      .subscribe(data => {
        console.log(" Este es la respuesta del servicio ");
        console.log(" Data ", data);
      });
  }

}
