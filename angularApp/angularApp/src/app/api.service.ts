import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'localhost:3000';
  constructor(private http: HttpClient) { }


  getUsers(){
      return this.http.get(this.apiUrl + '/users');
  }

  postUser(data){
    return this.http.post(this.apiUrl + '/users',  data);
  }

  updateUser(data){
    return this.http.put(this.apiUrl + '/users',  data);
  }

  deleteUser(data){
    return this.http.get(this.apiUrl + '/users', data);
  }

}

