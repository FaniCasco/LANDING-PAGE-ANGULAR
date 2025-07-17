import { Injectable } from '@angular/core';
import { Feature } from '../model/feature.model';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  features: Feature[] = [
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
  constructor() {}
  getFeatures(): Observable<Feature[]> {
    return new Observable((obs) => {
      setTimeout(() => {
        obs.next(this.features);
        obs.complete();
      }, 2000);
    });
  }
}
