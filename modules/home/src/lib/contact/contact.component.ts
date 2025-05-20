import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(32),
          Validators.minLength(2),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  getErrorControl(controlName: string): boolean {
    return (
      (this.form.controls[controlName].errors &&
        this.form.controls[controlName].touched) ??
      false
    );
  }

  send() {
    // eslint-disable-next-line no-console
    console.log('Envia e-mail de contato');
    this.form.reset();
  }
}
