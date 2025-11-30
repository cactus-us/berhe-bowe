import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { LuigisFooter } from './luigis-footer/luigis-footer';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, MatToolbar, MatButton, LuigisFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('berhe-bowe-app');
}
