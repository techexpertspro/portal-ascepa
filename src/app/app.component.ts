import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UltimasNoticiasComponent } from '@portal-ascepa/ultimas-noticias';

@Component({
  standalone: true,
  imports: [RouterModule, UltimasNoticiasComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portal-Ascepa';
}
