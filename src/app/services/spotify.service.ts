import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  urlSearch: string = 'https://api.spotify.com/v1/search';
  urlArtist: string = 'https://api.spotify.com/v1/artists'


  constructor( private _http: Http) { }

  getArtistas( param:string ){
    let query = `?q=${ param }&type=artist`;
    let url = this.urlSearch + query;

    return this._http.get( url )
      .map( res => {
        console.log("res ",res.json().artists.items );
        this.artists = res.json().artists.items;

        return res.json().artists.items;
      });
  }

  getArtist( id: string ){
    console.log( "id ",id );
    let query = `/${ id }`;
    let url = this.urlArtist + query;

    return this._http.get( url )
      .map( res => {
        console.log("res ",res.json() );
        return res.json();
      });
  }
}
