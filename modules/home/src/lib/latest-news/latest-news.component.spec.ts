import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOn } from 'jest-mock';
import { LatestNewsComponent } from './latest-news.component';

describe('LatestNewsComponent', () => {
  let component: LatestNewsComponent;
  let fixture: ComponentFixture<LatestNewsComponent>;

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestNewsComponent], // Importar o componente standalone
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default inputs', () => {
    expect(component.latestNews).toEqual([]);
    expect(component.title).toBe('');
    expect(component.content).toBe('');
    expect(component.imageUrl).toBe('');
    expect(component.altText).toBe('');
  });

  it('should set isCarousel and emit isCarouselChange event', () => {
    spyOn(component.isCarouselChange, 'emit');
    component.isCarousel = true;
    expect(component.isCarousel).toBe(true);
    expect(component.isCarouselChange.emit).toHaveBeenCalledWith(true);
  });

  it('should set isReady to true after ngOnInit', (done) => {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.isReady()).toBe(true);
      done();
    }, 0);
  });
});
