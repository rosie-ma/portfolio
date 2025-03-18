import {ChangeDetectorRef, Component, HostListener} from '@angular/core';
import {HeaderComponent} from './shared/header/header.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ExperienceComponent} from './experience/experience.component';
import {ContactComponent} from './contact/contact.component';
import {InTouchComponent} from './shared/in-touch/in-touch.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    ContactComponent,
    InTouchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isScrolled = false;

  constructor(private cd: ChangeDetectorRef) {}

  @HostListener('document:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 50;
    this.cd.detectChanges();
  }
}
