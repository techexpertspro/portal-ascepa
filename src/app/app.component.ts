import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@portal-ascepa/shared-ui';

@Component({
  standalone: true,
  imports: [RouterModule, CardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portal-Ascepa';
}
