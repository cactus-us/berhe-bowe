import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-catering-information',
  imports: [ ReactiveFormsModule ],
  templateUrl: './catering-information.html',
  styleUrl: './catering-information.css',
})
export class CateringInformation {
  constructor ( private router: Router) {}

  cateringForm = new FormGroup ( {
      name : new FormControl('', [
        Validators.required,
        Validators.pattern ( /^[a-zA-Z\s]+$/ )
      ]),

      phone : new FormControl('', [
        Validators.required,
        Validators.pattern( /^[0-9\-()+\s]{7,20}$/ )
      ]),

      email : new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      people : new FormControl('', [
        Validators.required,
        Validators.pattern( /^[0-9]+$/ )
      ]),

      company : new FormControl('', [ ] ),

      date : new FormControl('', [
        Validators.required,
        Validators.pattern( /^\d{2}-\d{2}-\d{4}$/)
      ]),

      time : new FormControl('', [
        Validators.required,
        Validators.pattern( /^\d{1,2}:\d{2}$/ )
      ]),

      occasion : new FormControl(''),
      description : new FormControl('')
  });

  submitInformation() {
    this.router.navigate ( [ '../catering-order' ] );
  }
}