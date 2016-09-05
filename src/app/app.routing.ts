import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './containers/home.component';
import { NotFoundComponent }      from './ui/not-found.component';

const appRoutes: Routes = [
  {    path: '',    component: HomeComponent  },
  {    path: 'user/:username/repos',    component: HomeComponent  },
  {    path: '**',    component: NotFoundComponent  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
