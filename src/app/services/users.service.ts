import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';
import {IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://reqres.in/api/users';
  private cache = new Map<string, Observable<any>>();

  constructor(private readonly http: HttpClient) {}



  //--------------------GetUsers---------------------------
  GetUsers(page: number = 1) {
    const cacheKey = `page-${page}`;
    const cachedData = this.cache.get(cacheKey);

    if (cachedData) {
      return cachedData;
    } else {
      const request$ = this.http.get(`${this.apiUrl}?page=${page}`).pipe(
        map((response) => response),
        shareReplay(1),
        catchError(this.handleError('GetUsers', [] as IUser[]))
      );

      this.cache.set(cacheKey, request$);
      return request$;
    }
  }

  //--------------------handleError---------------------------
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //--------------------searchUserById---------------------------
  searchUserById(id: number): Observable<any> {
    if (!id) {
      return of(null);
    }
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map((response) => response.data || null),
      catchError(() => of(null))
    );
  }

  
}
