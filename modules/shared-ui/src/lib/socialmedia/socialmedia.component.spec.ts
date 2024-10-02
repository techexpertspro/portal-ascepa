import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialmediaComponent } from './socialmedia.component';

describe('SocialmediaComponent', () => {
  let component: SocialmediaComponent;
  let fixture: ComponentFixture<SocialmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialmediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
