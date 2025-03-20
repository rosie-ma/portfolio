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

  sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];
  activeSection: string = 'home';
  isScrolling: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.isScrolling) {
      return;
    }

    let currentSection = '';
    let closestDistance = Infinity;

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const viewportMiddle = window.innerHeight / 2;

        const distance = Math.abs(elementMiddle - viewportMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = section;
        }
      }
    }

    if (currentSection && currentSection !== this.activeSection) {
      this.activeSection = currentSection;
    }
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const element = document.getElementById(sectionId);
    if (element) {
      this.isScrolling = true;

      const offset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        this.isScrolling = false;
      }, 500);
    }
  }
}
