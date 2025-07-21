import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactForm } from '../../core/model/contact-form.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
[x: string]: any;
formModel = {
  email: '',
  subject: '',
  message: ''
} as ContactForm;
submitForm() {
  console.log(this.formModel);
}
}

