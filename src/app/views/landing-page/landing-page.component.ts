import { Component, OnDestroy, OnInit } from '@angular/core';
import { Feature } from '../../core/model/feature.model';
import { PresentationComponent } from './presentation/presentation.component';
import { IconCardComponent } from '../../core/icon-card/icon-card.component';
import { CommonModule } from '@angular/common';
import { FeatureService } from '../../core/services/feature.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [PresentationComponent, IconCardComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit, OnDestroy {
  features?: Feature[];

  subscription = new Subscription();
  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.subscription.add(
      this.featureService.getFeatures().subscribe({
        next: (res) => {
          this.features = res;
        },
        error: (error) => {
          console.warn('Ha ocurrido un error con codigo:', error);
        },
        complete: () => {
          console.log('Emision terminada');
        },
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
