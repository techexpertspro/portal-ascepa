import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { homeRoutes } from '@portal-ascepa/home';
import { GlobalKeydownService } from '@portal-ascepa/shared-ui';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  opened = false;
  private readonly keydown = inject(GlobalKeydownService);
  private readonly destroy = inject(DestroyRef);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.keydown.keydownEvents$
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((key) => {
        this.navigateByKey(key);
      });
  }

  private navigateByKey(key: string): void {
    const index = parseInt(key, 10) - 1;
    if (index >= 0 && index < homeRoutes.length) {
      this.router.navigate([`home/${homeRoutes[index].path}`]);
    }
  }

  toggleMenu(): void {
    this.opened = !this.opened;
  }
}
