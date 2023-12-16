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
  expandedCardId: string | null = null;
  searchTerm = '';
  noResultsFound$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  ngOnInit(): void {
    this.data$ = this.dataService.getData().pipe(
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
    this.ngOnInit();
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
    const term = this.searchTerm.toLowerCase();
    return fund.fundName?.toLowerCase().includes(term) ||
      fund.fundCompany?.toLowerCase().includes(term) ||
      fund.fundType?.toLowerCase().includes(term);
  }
}
