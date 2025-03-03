import { Component, Input, signal } from '@angular/core';
import { Cars } from '../../cars';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() enteredArray = signal<Cars[]>([]);
}
