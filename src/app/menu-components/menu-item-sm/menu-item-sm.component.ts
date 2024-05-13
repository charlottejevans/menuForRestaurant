import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-item-sm',
  standalone: true,
  imports: [],
  templateUrl: './menu-item-sm.component.html',
  styleUrl: './menu-item-sm.component.css'
})
export class MenuItemSmComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) price!: number;
  @Input({required: true}) currency!: string;
}
