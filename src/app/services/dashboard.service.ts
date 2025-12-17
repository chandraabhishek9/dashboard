import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  fetchDashboardData():Observable<any>{
    let dataUrl:string = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(dataUrl);
  }
}
