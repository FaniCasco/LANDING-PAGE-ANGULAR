import { PresentationComponent } from './presentation/presentation.component';
import { PricingComponent } from './header/pricing/pricing.component';
import { ContactComponent } from './header/contact/contact.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'presentation',
    component: PresentationComponent
  },
   { path: 'pricing',
    component: PricingComponent
  },
   { path: 'contact',
    component: ContactComponent
  }





];