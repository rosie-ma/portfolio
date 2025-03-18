import {Component, HostListener} from '@angular/core';
import {ThemeToggleComponent} from '../../theme-toggle/theme-toggle.component';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    ThemeToggleComponent,
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
    this.isMenuOpen = false;
  }

  sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];

  activeSection: string = 'home';

  @HostListener('window:scroll', [])
  onScroll(): void {
    let currentSection = '';

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
          currentSection = section;
        }
      }
    }

    if (currentSection && currentSection !== this.activeSection) {
      this.activeSection = currentSection;
    }
  }
}
