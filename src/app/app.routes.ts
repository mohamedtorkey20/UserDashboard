import { Routes } from '@angular/router';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListPageComponent },
  { path: 'users/:id', component: UserDetailsPageComponent },
  { path: '**', component: NotFoundComponent },
];
