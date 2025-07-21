import { Component } from '@angular/core';
import { BtnSubscribeComponent } from '../../btn-subscribe/btn-subscribe.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
//import { FeaturesComponent } from '../../features/features.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [BtnSubscribeComponent, ReactiveFormsModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  email = new FormControl('');
  updateEmail() {
    if (this.email.disabled) {
      this.email.setValue('Este input se deshabilitó');
      this.email.enable();
    } else {
      this.email.setValue('Este input se habilitó');
      this.email.disable();
    }
  }
}
