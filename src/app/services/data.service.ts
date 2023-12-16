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

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number,
  ): (...funcArgs: Parameters<T>) => void {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timeout: any;
    return (...args: Parameters<T>) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}
