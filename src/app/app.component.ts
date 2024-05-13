import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppFooterComponent} from "./app-footer/app-footer.component";
import {MenuComponent} from "./menu-components/menu/menu.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFooterComponent, MenuComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menuForRestaurant';
}
