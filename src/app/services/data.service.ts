import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(private http: HttpClient) { }
  constructor() { }

  // getMenuItems() {
  //   return this.http.get<MenuItem[]>('../../assets/data/menu.json');
  // }
}
