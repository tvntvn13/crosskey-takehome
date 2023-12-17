import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import {
  ApiResponseArray,
  ApiResponseObject,
} from 'src/app/interfaces/api-response';
import { Fund } from 'src/app/interfaces/fund';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  private dataService = inject(DataService);
  private destroyRef = inject(DestroyRef);

  data$: Observable<ApiResponseObject | null> = of(null);
  searchTerm = '';
  noResultsFound$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  //eslint-disable-next-line
  debouncedSearchChange: any;

  constructor() {
    this.debouncedSearchChange = this.dataService.debounce(
      this.onSearchChange.bind(this),
      500,
    );
  }

  ngOnInit(): void {
    this.data$ = this.fetchData();
  }

  fetchData(): Observable<ApiResponseObject> {
    return this.dataService.getData().pipe(
      takeUntilDestroyed(this.destroyRef),
      map((responseArray: ApiResponseArray) => {
        const responseData = responseArray[0].data;
        return {
          ...responseArray[0],
          data: this.filterFundsAndCheckIfResults(responseData),
        };
      }),
    );
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.data$ = this.fetchData();
  }

  onSearchTermChange(searchTerm: string): void {
    this.debouncedSearchChange(searchTerm);
  }

  filterFundsAndCheckIfResults(funds: Fund[]): Fund[] {
    const filteredFunds = funds.filter((fundItem) =>
      this.filterFunds(fundItem)
    );
    this.noResultsFound$.next(filteredFunds.length === 0);
    return filteredFunds;
  }

  filterFunds(fund: Fund): boolean {
    if (!this.searchTerm) return true;
    const searchWords = this.searchTerm.trim().toLowerCase().split(' ');
    return searchWords.every((term) =>
      fund.fundName?.toLowerCase().includes(term) ||
      fund.fundCompany?.toLowerCase().includes(term) ||
      fund.fundType?.toLowerCase().includes(term)
    );
  }
}
