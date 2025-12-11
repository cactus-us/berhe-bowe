import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-contact-us-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-us-page.html',
  styleUrl: './contact-us-page.css',
})
export class ContactUsPage {
  
  checkWhitespace(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.trim().length === 0) {
      return { whitespace: true };
    }
    return null;
  }

  contactForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
      Validators.maxLength(100),
      this.checkWhitespace,
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
      Validators.maxLength(100),
      this.checkWhitespace,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
      this.checkWhitespace,
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(300),
      this.checkWhitespace,
    ]),
  });

  isInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      return true;
    }
    return false;
  }

  isRequired(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    if (field && field.hasValidator(Validators.required)) {
      return true;
    }
    return false;
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);

    if (field?.hasError('required')) {
      return 'This field is required';
    }

    if (field?.hasError('whitespace')) {
      return 'Cannot be only spaces';
    }

    if (field?.hasError('maxlength')) {
      return 'Too many characters';
    }

    if (field?.hasError('pattern')) {
      return 'Letters and spaces only';
    }

    if (field?.hasError('email')) {
      return 'Invalid email';
    }

    return '';
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
