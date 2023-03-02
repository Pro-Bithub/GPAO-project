
//postgres.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class PostgresService {

  constructor(
    private http: HttpClient
  ) { }

  postgres(data: any) {
    return this.http.post('/api/postgres', data);
  }

}