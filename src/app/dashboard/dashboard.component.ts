import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from '../data.service';
import { ApiResponseObject } from '../interfaces/api-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  private dataService = inject(DataService);
  private destroyRef = inject(DestroyRef);

  data$: Observable<ApiResponseObject | null> = of(null);

  ngOnInit(): void {
    this.dataService.getData().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.data$ = of(data[0]);
        console.log(data);
      });
  }
}
