import {Component, ChangeDetectorRef} from '@angular/core';

interface Skill {
  id: number;
  name: string;
  icon: string;
  experience: string;
  description: string;
}

@Component({
  standalone: true,
  selector: 'app-skills-expanded',
  templateUrl: './skills-expanded.component.html',
  styleUrls: ['./skills-expanded.component.scss'],
})
export class SkillsExpandedComponent {
  skills: Skill[] = [
    {
      id: 1,
      name: 'HTML',
      icon: 'assets/icons/html.svg',
      experience: '7 years',
      description: 'I have 7 years of experience with HTML5, specializing in semantic, accessible, and well-structured code. I use semantic tags to enhance SEO, readability, and maintainability while ensuring meaningful meta tags and alt attributes. My expertise includes optimizing web performance through best practices and efficient markup. I have extensive experience with component-based HTML structures and a deep understanding of industry-standard HTML architecture.',
    },
    {
      id: 2,
      name: 'CSS',
      icon: 'assets/icons/css.svg',
      experience: '7 years',
      description: 'I have 7 years of experience with CSS, specializing in writing clean, maintainable, and scalable styles. I efficiently use modern CSS techniques, including Flexbox, Grid, and custom properties, to create responsive and visually appealing layouts. My expertise includes performance optimization, accessibility best practices, and cross-browser compatibility. I have experience with component-based styling, BEM methodology, and CSS preprocessors like SASS/SCSS. ',
    },
    {
      id: 3,
      name: 'SASS',
      icon: 'assets/icons/sass.svg',
      experience: '5 years',
      description: 'I have extensive 5 years of experience with SASS, leveraging its features to write clean, maintainable, and scalable styles. I use variables, mixins, and functions to streamline development and ensure consistency across projects. My knowledge includes nesting, partials, and the modular approach to keep styles organized and efficient. I follow best practices for performance optimization and maintainability in large-scale applications. Additionally, I integrate SASS with component-based architectures for reusable styling.',
    },
    {
      id: 4,
      name: 'LESS',
      icon: 'assets/icons/less.svg',
      experience: '1 years',
      description: 'I have 1 year of experience with LESS, using it to write structured and maintainable styles. I work with variables, mixins, and nesting to improve code reusability and efficiency. My expertise includes optimizing performance in large projects. ',
    },
    {
      id: 5,
      name: 'Angular',
      icon: 'assets/icons/angular.svg',
      experience: '1 years',
      description: 'I have 1 year of experience with Angular, building dynamic and scalable web applications. I work with components, services, and modules to create maintainable and modular code structures. My expertise includes data binding, working with components, and optimizing performance for smooth user experiences. I integrate Angular with responsive design principles to ensure the best usability across devices. During my work in MicroBiz, I used Angular to add new features to existing parts, creating new components for shared usage. Also I used angular for my portfolio website.',
    },
    {
      id: 6,
      name: 'JavaScript',
      icon: 'assets/icons/javascript.svg',
      experience: '2 years',
      description: 'I have 2 years of experience with JavaScript, developing dynamic, efficient, and maintainable web applications. I worked with modern ES6+ features. My expertise includes DOM manipulation, event handling, and performance optimization for smooth user experiences. I follow best practices for structuring code, debugging, and ensuring cross-browser compatibility. Additionally, I have experience integrating JavaScript with frameworks and libraries to build scalable applications. I used Leaflet.js while working at Ucom to develop map-based applications.'
    },
    {
      id: 7,
      name: 'Bootstrap',
      icon: 'assets/icons/bootstrap.svg',
      experience: '3 years',
      description: 'I have 3 years of experience with Bootstrap, using it to create responsive and visually consistent web applications. I work with the grid system, utility classes, and components to streamline development and ensure cross-device compatibility. My expertise includes customizing Bootstrap with SASS variables, optimizing performance, and maintaining accessibility best practices. I efficiently integrate Bootstrap with modern front-end frameworks for scalable and maintainable UI design.',
    },
    {
      id: 8,
      name: 'Figma',
      icon: 'assets/icons/figma.svg',
      experience: '5 years',
      description: 'I have 5 years of experience with Figma, using it to design and prototype user interfaces. I used to work with wireframes, high-fidelity designs, and interactive prototypes to visualize user experiences. My expertise includes working with design systems, components, and reusable styles for consistency across projects. I',
    },
    {
      id: 9,
      name: 'GIT',
      icon: 'assets/icons/git.svg',
      experience: '5 years',
      description: 'I have 5 years of experience with Git, using it for version control and collaboration in software development. I manage branches, merge requests, and resolve conflicts to ensure a smooth workflow in team-based projects. My expertise includes using Git commands efficiently for version tracking, maintaining a clean and meaningful commit history, and working with remote repositories like GitHub, GitLab, and Bitbucket. I follow best practices for branching strategies and regularly perform code reviews to ensure code quality. ',
    },
    {
      id: 10,
      name: 'Kendo UI',
      icon: 'assets/icons/kendo.svg',
      experience: '4 years',
      description: 'I have 1 year of experience with Kendo UI, using it to build modern, interactive, and responsive web applications. I work with its rich set of UI components, such as grids, charts, and forms, to create feature-rich user interfaces. My expertise includes customizing Kendo UI widgets with themes and integrating them into Angular. Additionally, I follow best practices for accessibility and responsive design to enhance user experience across devices.',
    },
    {
      id: 11,
      name: 'Photoshop',
      icon: 'assets/icons/photoshop.svg',
      experience: '7 years',
      description: 'I have 7 years of experience with Photoshop, using it for web design, UI creation, and image editing. I work with layers, and masks to create visually appealing designs and optimized assets. My knowledge includes creating mockups, resizing images, and applying effects to enhance user interfaces. Additionally, I use Photoshop to design icons, banners, and other visual elements for web applications.',
    },
  ];

  selectedSkill: Skill | null = null;
  typedDescription: string = '';
  private typingSpeed: number = 10;

  selectSkill(skill: Skill): void {
    this.selectedSkill = skill;
    this.typedDescription = '';
    this.typeDescription();
  }

  private typingInterval: any;

  private typeDescription(): void {
    if (!this.selectedSkill) return;

    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    const description = this.selectedSkill.description;
    let i = 0;
    this.typedDescription = '';

    this.typingInterval = setInterval(() => {
      if (i < description.length) {
        this.typedDescription += description.charAt(i);
        i++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, this.typingSpeed);
  }
}
