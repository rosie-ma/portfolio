import {Component} from '@angular/core';
import {ThemeService} from '../services/theme.services';

@Component({
  standalone: true,
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  themeIcon: string = 'fa-solid fa-sun';

  constructor(public themeService: ThemeService) {
    this.updateIcon();
  }

  toggleTheme() {
    const currentTheme = this.themeService.getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
    this.updateIcon();
  }

  updateIcon() {
    const currentTheme = this.themeService.getTheme();
    this.themeIcon = currentTheme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
}
