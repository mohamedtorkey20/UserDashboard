import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../../components/user-list/user-list.component';


@Component({
  selector: 'app-user-list-page',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css'],
})
export class UserListPageComponent {}
