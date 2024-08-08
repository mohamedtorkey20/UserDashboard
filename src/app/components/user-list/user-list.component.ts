import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonListUserComponent } from '../skeleton-list-user/skeleton-list-user.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    UserCardComponent,
    HttpClientModule,
    SkeletonListUserComponent,
    MatPaginatorModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService],
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  isLoading = false;
  skeletonArray = Array(4).fill(0);
  totalUsers: number = 0;
  pageSize = 6;
  currentPage = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  //--------------------load Users---------------------------
  loadUsers(): void {
    this.isLoading = true;
    this.usersService.GetUsers(this.currentPage + 1).subscribe({
      next: (data: any) => {
        this.users = data.data;
        this.totalUsers = data.total;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  //--------------------Pagination---------------------------
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }

}
