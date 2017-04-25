import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Services
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any;
  soungs: any[];
  constructor( private _activatedRoute: ActivatedRoute,
               private _spotifyService: SpotifyService) { }

  ngOnInit() {

    this._activatedRoute.params
        .map( param => param['id'] )
        .subscribe( id =>{
          console.log( id );
          this._spotifyService.getArtist ( id )
              .subscribe( data => this.artist = data );

          this._spotifyService.getTop ( id )
              .subscribe( data => this.soungs = data );
        });
  }

}
