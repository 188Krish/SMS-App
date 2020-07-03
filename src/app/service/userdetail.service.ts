import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Userdetail } from '../shared/model/userdetail';


@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  apiURL = 'http://localhost:3004/profileInfo';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Userdetail[]>(this.apiURL);
  }

}
