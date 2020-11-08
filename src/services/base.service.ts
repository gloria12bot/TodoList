import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Service {
  URL = `https://todo-gloria.herokuapp.com`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpServer: HttpClient) {}
  getUsers(): Observable<any> {
    return this.httpServer.get(`${this.URL}/users`);
  }
  deleteUser(id: number): Observable<void> {
    return this.httpServer.delete<void>(`${this.URL}/users/${id}`);
  }
  editUser(id: any, user: any): Observable<any> {
    return this.httpServer.put(`${this.URL}/users/${id}`, user);
  }
  addUser(user: any): Observable<object> {
    return this.httpServer.post(`${this.URL}/users/`, user);
  }

  getAUser(id: number): Observable<void> {
    return this.httpServer.get<void>(`${this.URL}/users/${id}`);
  }

  addtask(task: any): Observable<object> {
    return this.httpServer.post(`${this.URL}/tasks/`, task);
  }
  completeTask(id: any, state: any): Observable<any> {
    return this.httpServer.patch<any>(`${this.URL}/tasks/${id}/state`, state);
  }

  deleteTask(id: number): Observable<void> {
    return this.httpServer.delete<void>(`${this.URL}/tasks/${id}`);
  }
}
