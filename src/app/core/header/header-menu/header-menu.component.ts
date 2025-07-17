import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../model/menu-item.model';
import { RouterLink, RouterLinkActive } from '@angular/router';




@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
@Input() menuItems?:MenuItem[];
}
