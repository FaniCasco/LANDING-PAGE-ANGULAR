import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature } from '../../core/model/feature.model';
import { FeatureService } from '../../core/services/feature.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent implements OnInit {
  features: Feature[] = []; 
  loading = true;

  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe({
      next: (response) => {
        this.features = response;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}