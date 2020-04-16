import { Component, OnInit } from '@angular/core';
import { LogementsService } from '../logements.service';
import { Logement } from '../logement.model';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';


@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {

  loadedOffres: Logement[] ;
  constructor(private LogementsService: LogementsService, private router:Router) { }

  ngOnInit() 
  {
    this.loadedOffres = this.LogementsService.logements;
  }
  onEdit(offreId: string, slidingItem: IonItemSliding)
  {
    slidingItem.close();
    this.router.navigate(['/','logements','tabs','offres','edit',offreId]);
    console.log('Modif Item', offreId)
  }

}
