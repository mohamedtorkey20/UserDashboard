import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonDetailsUserComponent } from '../skeleton-details-user/skeleton-details-user.component';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule, SkeletonDetailsUserComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  providers: [UsersService],
})
export class UserDetailsComponent implements OnInit {

  user: IUser = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };
  id: number;
  isLoaded: boolean = false;



  constructor(
    route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadUser();
  }

  //--------------------Navigate to the user list page ---------
  redirct() {
    this.router.navigate(['users']);
  }

  //--------------------loadUser by Id---------------------------
  loadUser(): void {
    this.isLoaded = true;
    this.usersService.searchUserById(this.id).subscribe({
      next: (data: any) => {
        this.user = data;
        this.isLoaded = false;
      },
      error: (erorr) => {
        console.error(erorr);
      },
    });
  }


}
