import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/user.actions';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatInputModule, MatIconModule, MatFormFieldModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private searchSubject = new Subject<number>();

  @ViewChild('search', { static: true }) search!: ElementRef;

  constructor(private store: Store) {}

  ngOnInit() {


    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((id: number) => {
        this.store.dispatch(UserActions.searchUserById({ id }));

        this.search.nativeElement.value = '';
      });
  }

  GetIdForSearch(e: any) {
    const id = +e.target.value;
    if (id) {
      this.searchSubject.next(id);
    }
  }
}
