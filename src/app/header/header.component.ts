import { OutlineButtonComponent } from './outline-button/outline-button.component';
import {HeaderMenuComponent} from "./header-menu/header-menu.component";
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OutlineButtonComponent,
    HeaderMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
logo = 'assets/logo.png';
menuItems = [{
 text: 'Free Landing Page',
 route: '/'
},
{
 text: 'Features',
 route: '/'
},
{
 text: 'Services',
 route: '/'
},
{
 text: 'Pricing',
 route: '/'
},
{
 text: 'Contact',
 route: '/'
}
 
]
}
