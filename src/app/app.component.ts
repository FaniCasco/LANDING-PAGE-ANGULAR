import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesComponent } from "./features/features.component";
import { HeaderComponent } from "./header/header.component";
import { PresentationComponent} from "./presentation/presentation.component";

@Component({
  selector: 'app-root',
  imports: [FeaturesComponent, HeaderComponent, PresentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'landingpage';
}
