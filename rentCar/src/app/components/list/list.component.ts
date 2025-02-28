import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  listOfCars = [
    {id: 0, brand: "Seat", model: "Ibiza", free: true},
    {id: 1, brand: "Renault", model: "Clio", free: false},
    {id: 2, brand: "Peugeot", model: "205 Cabrio", image: 'https://www.racingmodelismo.com/8463-22865-thickbox/peugeot-205-cti-mk1-cabriolet-solido-scale-1-18-s1806201-s1806201-22865.jpg', free: true},
    {id: 3, brand: "Dacia", model: "Duster", free: false},
    {id: 4, brand: "Citroën", model: "Berlingo", free: false},
    {id: 5, brand: "Opel", model: "Astra", free: false},
    {id: 6, brand: "Alfa Romeo", model: "156 Sportwagon", free: false},
    {id: 7, brand: "Škoda", model: "Fabia", free: true},
    {id: 8, brand: "Chevrolet", model: "Camaro", image: 'https://img.tipcars.com/fotky_velke/55437052_1/20250210180639/E/chevrolet-camaro-6-2-v8-2ss.jpg', free: true},
  ]

  constructor(public router: Router) {}

  openDetail(id: number) {
    this.router.navigateByUrl('detail/' + id)
  }
}
