import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { ContactComponent } from './views/contact/contact.component';
import { FeaturesComponent } from './views/features/features.component';
//import { ServicesComponent } from './views/services/services.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'features', component: FeaturesComponent },
  /*   { path: 'services',
    component: ServicesComponent
  }, */
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
];
