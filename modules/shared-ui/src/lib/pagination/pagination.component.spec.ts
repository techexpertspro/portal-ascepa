import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { PaginationComponent } from './pagination.component';

@Component({
  template: `
    <lib-pagination
      [totalPages]="totalPages"
      [currentPage]="currentPage"
      [maxVisible]="maxVisible"
      (pageChange)="changePage($event)"
    >
    </lib-pagination>
  `,
  standalone: true,
  imports: [PaginationComponent],
})
class TestHostComponent {
  totalPages = 10;
  currentPage = 3;
  maxVisible = 5;
  newPage?: number;

  changePage(page: number): void {
    this.newPage = page;
  }
}

describe('PaginationComponent with HostComponent', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let component: PaginationComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatIcon, PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(hostComponent).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should initialize with correct input values', () => {
    expect(component.totalPages()).toBe(10);
    expect(component.currentPage()).toBe(3);
    expect(component.maxVisible()).toBe(5);
  });

  it('should highlight the current page button', () => {
    const activeButton = fixture.nativeElement.querySelector(
      '.ascepa-pagination__item--selected',
    );
    expect(activeButton.textContent.trim()).toBe('3');
  });

  it('should disable previous button when on first page', () => {
    hostComponent.currentPage = 1;
    fixture.detectChanges();

    const prevButton = fixture.nativeElement.querySelector(
      'button.ascepa-pagination__previous',
    );
    expect(prevButton.disabled).toBe(true);
  });

  it('should disable next button when on last page', () => {
    hostComponent.currentPage = 10;
    fixture.detectChanges();

    const nextButton = fixture.nativeElement.querySelector(
      'button.ascepa-pagination__next',
    );
    expect(nextButton.disabled).toBe(true);
  });

  it('should emit pageChange when a different page button is clicked', () => {
    const pageButton = fixture.nativeElement.querySelector(
      'button.ascepa-pagination__item:not(.ascepa-pagination__item--selected)',
    );
    pageButton.click();

    expect(hostComponent.newPage).toBeDefined();
  });

  it('should emit pageChange on previous and next button clicks', () => {
    const prevButton = fixture.nativeElement.querySelector(
      'button.ascepa-pagination__previous',
    );
    prevButton.click();
    expect(hostComponent.newPage).toBe(2);

    const nextButton = fixture.nativeElement.querySelector(
      'button.ascepa-pagination__next',
    );
    nextButton.click();
    expect(hostComponent.newPage).toBe(4);
  });

  it('should update pagination when inputs change dynamically', () => {
    hostComponent.totalPages = 15;
    hostComponent.currentPage = 8;
    hostComponent.maxVisible = 7;
    fixture.detectChanges();

    expect(component.visiblePages().length).toBeGreaterThan(5);
    const activeButton = fixture.nativeElement.querySelector(
      '.ascepa-pagination__item--selected',
    );
    expect(activeButton.textContent.trim()).toBe('8');
  });

  it('should render only last 5 pages when nearing the end', () => {
    hostComponent.currentPage = 8;
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll(
      'button.ascepa-pagination__item',
    );
    const lastButton = buttons[buttons.length - 1].textContent.trim();

    expect(lastButton).toBe('10');
    expect(buttons[buttons.length - 2].textContent.trim()).toBe('9');
  });
});
