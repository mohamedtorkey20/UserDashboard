import { Component } from '@angular/core';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [UserDetailsComponent, RouterModule],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.css',
})
export class UserDetailsPageComponent {}
