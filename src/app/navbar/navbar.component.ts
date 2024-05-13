import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavbarLinkComponent} from "../navbar-link/navbar-link.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NavbarLinkComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
