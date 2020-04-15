import { Component, OnInit } from '@angular/core';
import { LogementsService } from '../logements.service';
import { Logement } from '../logement.model';


@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {

  loadedOffres: Logement[] ;
  constructor(private LogementsService: LogementsService) { }

  ngOnInit() 
  {
    this.loadedOffres = this.LogementsService.logements;
  }

}
