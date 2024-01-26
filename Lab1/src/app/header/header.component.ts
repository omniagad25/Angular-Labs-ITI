import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: string='Omnia Gad';
  image:string='https://wallpaperaccess.com/full/3520511.png';
  linkedinLink: string = 'https://www.linkedin.com/';
  contact(){
    window.location.href = this.linkedinLink;
  }
}
