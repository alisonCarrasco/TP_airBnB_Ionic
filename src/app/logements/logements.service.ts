import { Injectable } from '@angular/core';
import { Logement } from './logement.model';

@Injectable({
  providedIn: 'root'
})
export class LogementsService {

  private _logements: Logement[] =
  [
    new Logement(
      'p1',
      'Villa de Luxe',
      'Au coeur de Essaouira(Maroc)',
      'https://www.villanovo.fr/images/landing_pages/landing_31_52_1507544398.1920.jpg',
      149.99
    ),
    new Logement(
      'p2',
      'Paris',
      'A romantic place',
      'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile$',
      189.99
    ),
    new Logement(
      'p3',
      'villa Water Dream',
      'La plus belle ile (Guadeloupe)',
      'https://booking.prestigevillarental.com/fr/location/fotos/2/1460973678f3c0011938967142ee231911a39e6101/149159676635e3d4c2d37feddeea8ab6e0733f31df.jpg',
      189.99
    )
  
  ]
;

  get logements()
  {
    return [...this._logements];
  }

  getLogement(id:string)
  {
    return {...this._logements.find(unLogement=> unLogement.id === id)};
  }

  constructor() { }

}
