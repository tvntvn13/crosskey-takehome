import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseArray } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  getData(): Observable<ApiResponseArray> {
    return this.http.get<ApiResponseArray>(
      'https://ivarpivar.netlify.app/api/',
    );
  }
}
