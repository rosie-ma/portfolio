import {Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-additional-skills',
  templateUrl: './additional-skills.component.html',
  styleUrls: ['./additional-skills.component.scss']
})
export class AdditionalSkillsComponent implements AfterViewInit {
  @ViewChild('additionalSkillsSection') additionalSkillsSection!: ElementRef;

  programmingSkills: string[] = [
    'Code Optimization',
    'Cross-Browser Testing',
    'Browser Developer Tools',
    'Responsive Design',
    'Web Performance Optimization',
  ];

  developmentEnvironments: string[] = [
    'WebStorm',
    'PhpStorm',
    'VSCode',
    'Sublime Text',
    'Atom',
  ];

  softSkills: string[] = [
    'Attention to Detail',
    'Adaptability & Willingness to Learn',
    'Time management',
    'Task Prioritization',
    'Team Collaboration',
    'Client Communication',
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngAfterViewInit(): void {
    const section = this.additionalSkillsSection?.nativeElement;
    section.classList.remove('is-visible');

    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('Element is visible, adding is-visible class');
              section.classList.add('is-visible');
              observer.unobserve(section);
            } else {
            }
          });
        },
        {threshold: 0.4}
      );
      observer.observe(section);
    } else {
      section.classList.add('is-visible');
    }
  }
}
