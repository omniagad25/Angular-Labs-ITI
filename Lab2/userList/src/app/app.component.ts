import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFieldComponent } from './search-field/search-field.component';
import { UserCardsComponent } from './user-cards/user-cards.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchFieldComponent, UserCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userList';
}
