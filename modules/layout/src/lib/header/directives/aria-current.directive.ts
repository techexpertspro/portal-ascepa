import { Directive, HostBinding, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Directive({
  selector: '[libAriaCurrent]',
  standalone: true,
  hostDirectives: [
    {
      directive: RouterLinkActive,
      inputs: ['routerLinkActive'],
    },
  ],
})
export class AriaCurrentDirective {
  private routerLinkActive = inject(RouterLinkActive);

  @HostBinding('attr.aria-current')
  get ariaCurrent(): 'page' | null {
    return this.routerLinkActive.isActive ? 'page' : null;
  }
}
