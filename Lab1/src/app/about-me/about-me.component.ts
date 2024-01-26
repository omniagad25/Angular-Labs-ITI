import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  info:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eos quam qui laudantium doloribus mollitia, rerum quidem ut? Reiciendis eligendi odio nam praesentium quas voluptas unde labore veniam facilis dolor?';
    username:string='Omnia Gad';
    
}
