import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-us-page.html',
  styleUrls: ['./contact-us-page.css'],
})
export class ContactUsPage {
  whitespaceOnly = (control: AbstractControl): ValidationErrors | null => {
    const val = control.value;
    if (val && typeof val === 'string' && val.trim().length === 0) {
      return { whitespace: true };
    }
    return null;
  };

  contactForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
      Validators.maxLength(100),
      this.whitespaceOnly,
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
      Validators.maxLength(100),
      this.whitespaceOnly,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
      this.whitespaceOnly,
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(300),
      this.whitespaceOnly,
    ]),
  });

  invalidField(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  requiredField(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field?.hasValidator(Validators.required) ?? false;
  }

  errorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);

    if (field?.hasError('required')) {
      return 'Error: This field is required.';
    }

    if (field?.hasError('whitespace')) {
      return 'Error: This cannot contain only spaces.';
    }

    if (field?.hasError('maxlength')) {
      const maxLength = field.getError('maxlength').requiredLength;
      return `Error: Maximum ${maxLength} characters allowed.`;
    }

    if (field?.hasError('pattern')) {
      switch (fieldName) {
        case 'firstName':
        case 'lastName':
          return 'Error: Letters and spaces only.';
        default:
          return 'Error: Invalid format.';
      }
    }

    if (field?.hasError('email')) {
      return 'Error: Invalid email address.';
    }

    return '';
  }

  submitContact() {
    if (this.contactForm.valid) {
      // For now, just log. In a real app, you would send this to a backend.
      console.log('Contact form submitted:', this.contactForm.value);
      // Optionally reset the form
      this.contactForm.reset();
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
