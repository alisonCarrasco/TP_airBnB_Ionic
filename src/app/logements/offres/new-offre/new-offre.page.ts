import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offre',
  templateUrl: './new-offre.page.html',
  styleUrls: ['./new-offre.page.scss'],
})
export class NewOffrePage implements OnInit {

  form:FormGroup;

  constructor() { }

  ngOnInit() 
  {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),

      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      prix: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      dateDeb: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateFin: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    
    });
  }

  onCreateOffre()
  {
    console.log("Offre créee");
  }

}
