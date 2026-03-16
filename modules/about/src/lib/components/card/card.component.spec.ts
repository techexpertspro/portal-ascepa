import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let componentRef: ComponentRef<CardComponent>;

  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    componentRef = fixture.componentRef;
    componentRef.setInput('title', 'title_test');
    componentRef.setInput('text', 'text_test');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rend title and text correctly', () => {
    const title: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    const text: HTMLElement = fixture.nativeElement.querySelector('p');

    expect(title.textContent).toContain('Title_test');
    expect(text.textContent).toContain('text_test');

    componentRef.setInput('title', 'title_test2');
    componentRef.setInput('text', 'text_test2');
    fixture.detectChanges();

    expect(title.textContent).toContain('Title_test2');
    expect(text.textContent).toContain('text_test2');
  });
});
