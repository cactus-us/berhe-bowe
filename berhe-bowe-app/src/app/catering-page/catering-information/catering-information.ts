import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-catering-information',
  imports: [ ReactiveFormsModule ],
  templateUrl: './catering-information.html',
  styleUrl: './catering-information.css',
})
export class CateringInformation {
  constructor ( private router: Router) {}

  name = new FormControl('');
  phone = new FormControl('');
  email = new FormControl('');
  people = new FormControl('');
  company = new FormControl('');
  date = new FormControl('');
  time = new FormControl('');
  occasion = new FormControl('');
  description = new FormControl('');

  submitInformation() {
    this.router.navigate ( [ '../catering-order' ] );
  }
}