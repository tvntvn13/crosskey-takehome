import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output()
    search = new EventEmitter<string>();

  searchTerm = '';

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }

  resetSearch() {
    this.searchTerm = '';
    this.search.emit(this.searchTerm);
  }
}
