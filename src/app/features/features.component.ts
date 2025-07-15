import { Component } from '@angular/core';
import { IconCardComponent } from './icon-card/icon-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [IconCardComponent, CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  features = [
    {
      icon: 'edit',
      title: 'Easy to use',
      description:
        'Editing and customizing Essential Landing is easy and fast.',
    },
    {
      icon: 'stacks',
      title: '100% Responsive',
      description:
        'Editing and customizing  Essential Landing is easy and fast.',
    },
    {
      icon: 'devices',
      title: '50+ New Pages',
      description:
        'Editing and customizing Essential Landing is easy and fast.',
    },
  ];
}
