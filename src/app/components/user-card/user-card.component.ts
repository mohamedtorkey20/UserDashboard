import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
  imports: [MatCardModule, MatButtonModule, MatIconModule,RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class UserCardComponent {

  @Input() user!: IUser;

}
