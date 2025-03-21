import {Component} from '@angular/core';
import {SkillsExpandedComponent} from './skills-expanded/skills-expanded.component';
import {AdditionalSkillsComponent} from './soft-skills/additional-skills.component';

@Component({
  standalone: true,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  imports: [
    SkillsExpandedComponent,
    AdditionalSkillsComponent,
  ],
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  isComponentVisible: boolean = false;

  skills = [
    {name: 'HTML', icon: 'assets/icons/html.svg', experience: '7 years'},
    {name: 'CSS', icon: 'assets/icons/css.svg', experience: '7 years'},
    {name: 'SASS', icon: 'assets/icons/sass.svg', experience: '5 years'},
    {name: 'LESS', icon: 'assets/icons/less.svg', experience: '1 years'},
    {name: 'Angular', icon: 'assets/icons/angular.svg', experience: '1 years'},
    {name: 'JavaScript', icon: 'assets/icons/javascript.svg', experience: '2 years'},
    {name: 'Bootstrap', icon: 'assets/icons/bootstrap.svg', experience: '3 years'},
    {name: 'Figma', icon: 'assets/icons/figma.svg', experience: '5 years'},
    {name: 'GIT', icon: 'assets/icons/git.svg', experience: '5 years'},
    {name: 'Kendo UI', icon: 'assets/icons/kendo.svg', experience: '5 years'},
    {name: 'Photoshop', icon: 'assets/icons/photoshop.svg', experience: '7 years'},
  ];

  isHovered = false;

  onHover(): void {
    this.isHovered = true;
  }

  toggleComponent(): void {
    this.isComponentVisible = !this.isComponentVisible;
  }

  onLeave(): void {
    this.isHovered = false;
  }
}
