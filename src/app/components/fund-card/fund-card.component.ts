import { Component, Input } from '@angular/core';
import { Fund } from 'src/app/interfaces/fund';

@Component({
  selector: 'app-fund-card',
  templateUrl: './fund-card.component.html',
  styleUrls: ['./fund-card.component.css'],
})
export class FundCardComponent {
  @Input()
    fund: Fund = {} as Fund;

  isExpanded = false;

  toggleCard(): void {
    this.isExpanded = !this.isExpanded;
  }

  closeCard(): void {
    this.isExpanded = false;
  }

  hasValidDocument(): boolean {
    return this?.fund?.documents.some((document) =>
      document.url && document.title
    );
  }
}
