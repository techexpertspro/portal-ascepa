import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleMenu and close menu', () => {
    component.isMenuExpanded = true;
    component.toggleMenu();
    expect(component.isMenuExpanded).toBe(false);
  });

  it('should call toggleMenu and open menu', () => {
    component.isMenuExpanded = false;
    component.toggleMenu();
    expect(component.isMenuExpanded).toBe(true);
  });
});
