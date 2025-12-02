import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catering-information',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './catering-information.html',
  styleUrl: './catering-information.css',
})
export class CateringInformation {
  constructor ( private router: Router) {}

  dateValidator = ( control : AbstractControl ) : ValidationErrors | null => {
    const dateInput = control.value;

    if ( !dateInput ) {
      return null;
    }

    const dateSections = dateInput.match ( /^(\d{2})-(\d{2})-(\d{4})$/ );

    if ( !dateSections ) {
      return null;
    }

    const month = parseInt ( dateSections [ 1 ], 10);
    const day = parseInt ( dateSections [ 2 ], 10);
    const year = parseInt ( dateSections [ 3 ], 10);
    const cateringDate = new Date ( year, month - 1, day );

    if ( isNaN ( cateringDate.getTime () ) ) {
      return { invalidDate : true };
    }

    const today = new Date();
    today.setHours ( 0, 0, 0, 0 );
    cateringDate.setHours ( 0, 0, 0, 0 );

    const diffTime = cateringDate.getTime () - today.getTime ();
    const diffDays = Math.ceil ( diffTime / ( 1000 * 60 * 60 * 24 ) );

    if ( diffDays < 0 ) {
      return { pastDate : true };
    }

    const peopleControl = this.cateringForm?.get ( 'people' );
    const peopleValue = peopleControl?.value;

    if ( !peopleValue ) {
      return null;
    }

    const numPeople = parseInt ( peopleValue, 10 );

    if ( numPeople < 50 && diffDays < 14 ) {
      return { insufficientNotice : { required : 14, actual : diffDays } };
    }

    if ( numPeople >= 50 && diffDays < 21 ) {
      return { insufficientNotice : { required : 21, actual : diffDays } };
    }

    return null;
  };

  whitespaceOnly = ( control : AbstractControl ) : ValidationErrors | null => {
    const val = control.value;
    
    if ( val && typeof val === 'string' && val.trim ().length === 0 ) {
      return { whitespace : true };
    }

    return null;
  };

  cateringForm = new FormGroup ( {
      name : new FormControl ('', [
        Validators.required,
        Validators.pattern ( /^[a-zA-Z\s]+$/ ),
        Validators.maxLength(100),
        this.whitespaceOnly
      ] ),

      phone : new FormControl ('', [
        Validators.required,
        Validators.pattern ( /^[0-9\-()+\s]{7,20}$/ ),
        Validators.maxLength(100),
        this.whitespaceOnly
      ] ),

      email : new FormControl ('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100),
        this.whitespaceOnly
      ] ),

      people : new FormControl ('', [
        Validators.required,
        Validators.pattern ( /^[0-9]+$/ ),
        Validators.maxLength(100),
        this.whitespaceOnly
      ] ),

      company : new FormControl ('', [
        Validators.maxLength(100),
        this.whitespaceOnly
       ] ),

      date : new FormControl ('', [
        Validators.required,
        Validators.pattern ( /^\d{2}-\d{2}-\d{4}$/),
        Validators.maxLength(100),
        this.dateValidator,
        this.whitespaceOnly
      ] ),

      time : new FormControl ('', [
        Validators.required,
        Validators.pattern ( /^\d{1,2}:\d{2}$/ ),
        Validators.maxLength(100),
        this.whitespaceOnly
      ] ),

      occasion : new FormControl ('', [
        this.whitespaceOnly,
        Validators.maxLength(100)
      ] ),

      description : new FormControl ('', [
        this.whitespaceOnly,
        Validators.maxLength(300)
      ] )
  });

  ngOnInit() {
    this.cateringForm.get ( 'people' ) ?.valueChanges.subscribe ( () => {
      this.cateringForm.get ( 'date' ) ?.updateValueAndValidity ();
    });
  }

  invalidField ( fieldName : string ) : boolean {
    const field = this.cateringForm.get ( fieldName );
    return !! ( field && field.invalid && field.touched );
  }

  requiredField ( fieldName : string ) : boolean {
    const field = this.cateringForm.get ( fieldName );
    return field?.hasValidator (Validators.required) ?? false;
  }

  errorMessage ( fieldName : string ) : string {
    const field = this.cateringForm.get (fieldName);

    if ( field?.hasError ( 'required' ) ) {
      return 'Error: This field is required.';
    }

    if ( field?.hasError ( 'whitespace' ) ) {
      return 'Error: This cannot contain only spaces.';
    }

    if ( field?.hasError ( 'maxlength' ) ) {
      const maxLength = field.getError ( 'maxlength' ).requiredLength;
      return `Error: Maximum ${maxLength} characters allowed.`;
    }

    if ( field?.hasError ( 'pattern' ) ) {
      switch ( fieldName ) {
        case 'name' : return 'Error: Letters and spaces only.';
        case 'phone' : return 'Error: Invalid phone number format.';
        case 'people' : return 'Error: Numbers only.';
        case 'date' : return 'Error: Use MM-DD-YYYY format only';
        case 'time' : return 'Error: Use HH:MM format only';
        default : return 'Error: Invalid format.';
      }
    }

    if ( field?.hasError ( 'invalidDate' ) ) {
      return 'Error: Please enter a valid date.';
    }

    if ( field?.hasError ( 'pastDate' ) ) {
      return 'Error: Event date cannot be in the past.';
    }

    if ( field?.hasError ( 'insufficientNotice' ) ) {
      const error = field.getError ( 'insufficientNotice' );
      const ppl = this.cateringForm.get ('people')?.value;
      const numPpl = ppl ? parseInt ( ppl, 10 ) : 0;

      if ( numPpl < 50 ) {
        return 'Error: Events with 50 people or less require at least two weeks notice.';
      } else {
        return 'Error: Events with 50+ people require at least three weeks notice.';
      }
    }

    if ( field?.hasError ( 'email' ) ) {
      return 'Error: Invalid email address.'
    }

    return '';
  }

  submitInformation() {
    if ( this.cateringForm.valid ) {
      this.router.navigate ( [ '../catering-order' ] );
    } else {
      Object.keys ( this.cateringForm.controls ).forEach ( key => {
        this.cateringForm.get ( key )?.markAsTouched ();
      });
    }
  }
}