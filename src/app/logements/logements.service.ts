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
      'Chez Jacques',
      'Au coeur de la ville',
      'https://www.montpellier.fr/uploads/Image/0f/WEB_CHEMIN_7308_1245938526.jpg',
      149.99
    ),
    new Logement(
      'p2',
      'Bise from Paris',
      'A romantic place dans le Bronx',
      'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile$',
      189.99
    )
  
  ]
;

  get logements()
  {
    return [...this._logements];
  }
  constructor() { }
}
