import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-combo-header',
  standalone: true,
  imports: [],
  templateUrl: './menu-combo-header.component.html',
  styleUrl: './menu-combo-header.component.css'
})
export class MenuComboHeaderComponent {
  @Input() title!: string;
}
