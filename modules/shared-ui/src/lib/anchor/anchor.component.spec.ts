import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnchorComponent } from './anchor.component';

@Component({
  template: `
    <a libAnchor href="#" [buttonLink]="isButtonLink" [variant]="buttonVariant">
      Test Link
    </a>
  `,
  standalone: true,
  imports: [AnchorComponent],
})
class TestHostComponent {
  isButtonLink = false;
  buttonVariant: 'primary' | 'secondary' = 'primary';
}

describe('AnchorComponent with HostComponent', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let anchorElement: HTMLAnchorElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    anchorElement = fixture.nativeElement.querySelector('a');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
    expect(anchorElement).toBeTruthy();
  });

  describe('Default state', () => {
    it('should not have button classes by default', () => {
      expect(anchorElement.classList.contains('anchor-button')).toBe(false);
      expect(anchorElement.classList.contains('anchor-button__primary')).toBe(
        false,
      );
      expect(anchorElement.classList.contains('anchor-button__secondary')).toBe(
        false,
      );
    });

    it('should render content correctly', () => {
      expect(anchorElement.textContent).toContain('Test Link');
    });
  });

  describe('Button link states', () => {
    it('should add anchor-button class when buttonLink is true', () => {
      hostComponent.isButtonLink = true;
      fixture.detectChanges();

      expect(anchorElement.classList.contains('anchor-button')).toBe(true);
    });

    it('should remove anchor-button class when buttonLink changes to false', () => {
      hostComponent.isButtonLink = true;
      fixture.detectChanges();
      hostComponent.isButtonLink = false;
      fixture.detectChanges();

      expect(anchorElement.classList.contains('anchor-button')).toBe(false);
    });
  });

  describe('Variant states', () => {
    beforeEach(() => {
      hostComponent.isButtonLink = true;
    });

    it('should have primary variant by default', () => {
      fixture.detectChanges();

      expect(anchorElement.classList.contains('anchor-button__primary')).toBe(
        true,
      );
      expect(anchorElement.classList.contains('anchor-button__secondary')).toBe(
        false,
      );
    });

    it('should switch to secondary variant', () => {
      hostComponent.buttonVariant = 'secondary';
      fixture.detectChanges();

      expect(anchorElement.classList.contains('anchor-button__secondary')).toBe(
        true,
      );
      expect(anchorElement.classList.contains('anchor-button__primary')).toBe(
        false,
      );
    });

    it('should revert to primary variant', () => {
      hostComponent.buttonVariant = 'secondary';
      fixture.detectChanges();
      hostComponent.buttonVariant = 'primary';
      fixture.detectChanges();

      expect(anchorElement.classList.contains('anchor-button__primary')).toBe(
        true,
      );
      expect(anchorElement.classList.contains('anchor-button__secondary')).toBe(
        false,
      );
    });

    it('should not apply variant classes when not a button link', () => {
      hostComponent.isButtonLink = false;
      hostComponent.buttonVariant = 'secondary';
      fixture.detectChanges();

      expect(anchorElement.classList.contains('anchor-button__secondary')).toBe(
        false,
      );
      expect(anchorElement.classList.contains('anchor-button__primary')).toBe(
        false,
      );
    });
  });

  describe('Accessibility', () => {
    it('should maintain href attribute', () => {
      expect(anchorElement.getAttribute('href')).toBe('#');
    });

    it('should render as an anchor element', () => {
      expect(anchorElement.tagName).toBe('A');
    });
  });
});
