import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[libDisablePointer]',
  standalone: true,
})
export class DisableEventsDirective implements AfterViewInit {
  private readonly renderer = inject(Renderer2);
  private readonly el = inject(ElementRef);

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'auto');
  }
}
