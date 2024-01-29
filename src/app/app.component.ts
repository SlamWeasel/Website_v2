import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibMod } from '../lib/lib.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LibMod],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'Website_v2';
}
