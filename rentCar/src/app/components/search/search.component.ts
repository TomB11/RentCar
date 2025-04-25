import { CommonModule } from '@angular/common';
import { Component, computed, Signal, signal } from '@angular/core';
import { Cars } from '../../interfaces/cars';
import { ApiService } from '../../services/api.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(public api: ApiService) {
  }

  searchCar(value: string) {
    this.api.listOfCars.set([])
    this.api.getSearchedCar(value)
  }
}