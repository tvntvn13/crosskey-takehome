import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event with the input value', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    const inputValue = 'test search';
    const emitSpy = spyOn(component.search, 'emit');
    inputElement.value = inputValue;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchTerm).toBe(inputValue);
    expect(emitSpy).toHaveBeenCalledWith(inputValue);
  });

  it('should reset the search term and emit search event with empty string', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    const emitSpy = spyOn(component.search, 'emit');
    component.searchTerm = 'test search';
    component.resetSearch();
    expect(component.searchTerm).toBe('');
    expect(inputElement.value).toBe('');
    expect(emitSpy).toHaveBeenCalledWith('');
  });
});
