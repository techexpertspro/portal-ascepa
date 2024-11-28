import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { HomeContentService } from '@portal-ascepa/shared-ui';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let metaService: Meta;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        Meta,
        {
          provide: HomeContentService,
          useValue: { getHomeContent: () => of({}) },
        },
      ],
    }).compileComponents();

    metaService = TestBed.inject(Meta);

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add meta tags', () => {
    // Arrange
    component.ngOnInit();

    //Act
    const descriptionTag = metaService.getTag('name="description"');
    const authorTag = metaService.getTag('name="author"');
    const ogTitleTag = metaService.getTag('property="og:title"');

    //Assert
    expect(descriptionTag?.content).toBe(
      'Página inicial do Portal Ascepa. ONG Associação de e para Cegos do Pará.',
    );
    expect(authorTag?.content).toBe(
      'Mentoria Angular PRO | Tech Experts - https://techexperts.pro',
    );
    expect(ogTitleTag?.content).toBe(
      'Portal Ascepa - Associação de e para Cegos do Pará.',
    );
  });
});
