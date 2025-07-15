import { Component } from '@angular/core';
import { BtnSubscribeComponent } from './btn-subscribe/btn-subscribe.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
selector: 'app-presentation',
standalone: true,
  imports: [BtnSubscribeComponent,
    FeaturesComponent
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

}

