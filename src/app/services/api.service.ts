import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getList(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos/')
  }
}
