import {Component} from '@angular/core';
import {SafeUrlPipe} from '../services/safeUrl.pipe';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  imports: [
    SafeUrlPipe
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioItems = [
    {
      name: 'MicroBiz Cloud Pos',
      description: 'This project is an affordable, modern POS software designed to meet the needs of todays retail market. The attached website represents just 10% of the full project. To explore its full capabilities, visit the link and sign up for a free trial—it takes only a minute. Due to confidentiality, I cannot provide direct links to the main POS application, but you will still be able to access and review it through the trial.',
      url: 'https://microbiz.com/',
    },
    {
      name: 'My Portfolio',
      description: 'My portfolio website is a showcase of my work as a front-end developer, featuring a clean and modern design with both light and dark themes. It highlights my skills, projects, and experience. Built for an intuitive and engaging experience, it reflects my passion for creating beautiful and functional web applications. Website is designed and implemented by me using HTML5 SCSS and Angular JS.',
      url: 'https://rosiemanukyan-portfolio.vercel.app/',
    },
    {
      name: 'Single-Page Website',
      description: 'Responsive website built with a focus on simplicity and user experience. The design which is done by me is optimized for mobile and desktop devices, ensuring fast loading times and a seamless browsing experience.',
      url: 'https://htgroup.am/',
    },
    {
      name: 'Portfolio Website',
      description: 'The development of the GH Mobilia website, ensuring a visually appealing and responsive user experience. I implemented and designed a clean and modern UI, optimized for performance and accessibility, using HTML, SCSS, and Angular. The design highlights the brand’s craftsmanship, providing a seamless browsing experience across devices.',
      url: 'https://ghmobilia.co.uk/',
    }
  ];
}
