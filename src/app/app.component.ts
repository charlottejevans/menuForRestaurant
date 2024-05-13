import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppFooterComponent} from "./app-footer/app-footer.component";
import {MenuComponent} from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menuForRestaurant';
}
