import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  isSentFailed: boolean = false;
  isSent: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.loading = true;
      this.http
        .post('http://localhost:3000/api/contact', this.contactForm.value)
        .subscribe({
          next: (res) => {
            this.loading = false;
            this.isSent = true;
            this.isSentFailed = false;
            setTimeout(() => (this.isSent = false), 3000);
            this.contactForm.reset();
          },
          error: (err) => {
            this.loading = false;
            this.isSent = false;
            this.isSentFailed = true;
            setTimeout(() => (this.isSentFailed = false), 3000);
            this.contactForm.reset();
          },
        });
    }
  }
}
