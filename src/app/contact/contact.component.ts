import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = {
    email: 'rosiemanukyan98@gmail.com',
    phone: '+37495490849',
    address: 'Yerevan | Armenia',
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/rosie-manukyan',
      github: 'https://github.com/rosie-ma',
      telegram: 'https://t.me/Rosie_Kh',
    },
  };
}
