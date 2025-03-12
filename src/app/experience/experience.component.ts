import {Component} from '@angular/core';
import {ExperienceInterface} from './experience.interface';

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: ExperienceInterface[] = [
    {
      year: '2021 – till now',
      title: 'FrontEnd Developer',
      company: 'MicroBiz Cloud Point of Sale',
      description: 'During my time at Microbiz, I contributed to developing the Modern POS System, which is used by many customers worldwide. My key responsibilities and achievements include:',
      projectItems: [
        {
          projectItemHead: "Supporting Integration for WooCommerce Accounts:",
          projectInfo: "Worked on integrating our POS system with WooCommerce, ensuring seamless connectivity for users."
        },
        {
          projectItemHead: "Integration with FastBound",
          projectInfo: "Developed and supported the integration with FastBound, an essential tool for shops selling firearms"
        },
        {
          projectItemHead: "Receipt Generation",
          projectInfo: "Led the development of the receipt generation feature, supporting both paper and email receipts. This involved using PHP for logic and working with tools such as wkhtmltoimage, wkhtmltopdf, and SendGrid."
        },
        {
          projectItemHead: "Theme and Shared Module Development (Version 2)",
          projectInfo: "Undertook the development of a new version of the Theme module. Contributed to updating and optimizing the shared module using Angular and Kendo, focusing on performance improvements, creating new mixins and functions with SASS, and developing shared components used across the project"
        },
        {
          projectItemHead: "Working with TypeScript and Angular",
          projectInfo: ": Gained hands-on experience with TypeScript and Angular. In the last few months, I have been deepening my knowledge of Angular and continue to actively learn and improve my skills in this area"
        }
      ]
    },
    {
      year: '2018 - 2021',
      title: 'FrontEnd Developer',
      company: 'Ucom LLC',
      description: 'Throughout my tenure at Ucom, I have played a key role in developing essential tools that are now integral to engineers daily workflows.',
      projectItems: [
        {
          projectItemHead: "RAN Portal project | 2018 - 2019",
          projectInfo: "- Created user-friendly, standards-compliant, responsive, cross-browser\n" +
            "HTML, CSS, and JS designs.\n" +
            "- Developed HTML, CSS, and JS codes.\n" +
            "- Got involved in the entire lifecycle of the development project."
        },
        {
          projectItemHead: "RAN Map project | 2019 - 2020\n",
          projectInfo: "- Created a fast-working and optimized map-based tool with full mobile\n" +
            "adaptation.\n" +
            "- Explored and mastered the Leaflet.js JavaScript library.\n" +
            "- Worked with JSON data"
        },
        {
          projectItemHead: "TM System | 2020 -2021",
          projectInfo: "- Designing the user-friendly Time System Management tool.\n" +
            "- Exploring CSS extensions LESS, and SCSS (developed a project using LESS).\n" +
            "- Conduct training for co-workers on using TM System tool content.\n"
        }
      ]
    },
    {
      year: '2017 – 2018',
      title: 'Training',
      company: 'OGMA INC',
      description: 'Web development (HTML, CSS, JS, SQL).',
    },
    {
      year: '2015 - 2019',
      title: 'Education',
      company: 'Yerevan State University',
      description: 'Faculty of Informatics and Applied Mathematics. Specialty Mathematics – programmer',
    },
  ];
}
