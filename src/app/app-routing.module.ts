import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './home/homepage/homepage.component';
import {DetailsPageComponent} from './details/details-page/details-page.component';
import {ContactsPageComponent} from './contacts/contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'details',
    component: DetailsPageComponent,
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'contacts',
    component: ContactsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: ContactsPageComponent
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomepageComponent, DetailsPageComponent, ContactsPageComponent]
