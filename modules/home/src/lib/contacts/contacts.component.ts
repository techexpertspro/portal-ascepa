import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@portal-ascepa/shared-ui';

@Component({
  selector: 'lib-contacts',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {}
