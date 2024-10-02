import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SpeechRecognitionService } from '@ng-web-apis/speech';
import { of } from 'rxjs';
import { SettingsComponent } from '../settings/settings.component';
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

    const debugSettingsComponent = fixture.debugElement.query(
      By.directive(SettingsComponent),
    );
    const settingsComponentInstance = debugSettingsComponent.injector.get(
      SpeechRecognitionService,
    );

    jest.spyOn(settingsComponentInstance, 'pipe').mockReturnValue(of([]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleMenu and close menu', () => {
    component.opened = true;
    component.toggleMenu();
    expect(component.opened).toBe(false);
  });

  it('should call toggleMenu and open menu', () => {
    component.opened = false;
    component.toggleMenu();
    expect(component.opened).toBe(true);
  });
});
