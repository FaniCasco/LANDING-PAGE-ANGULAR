import { Component } from '@angular/core';
import { BtnSubscribeComponent } from './btn-subscribe/btn-subscribe.component';

@Component({
selector: 'app-presentation',
standalone: true,
  imports: [BtnSubscribeComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

}

