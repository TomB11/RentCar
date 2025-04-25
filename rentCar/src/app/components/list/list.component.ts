import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Cars } from '../../interfaces/cars';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public listOfCars = signal<Cars[]>([]);

  constructor(public router: Router, public api: ApiService) {
    this.api.getAllCars().subscribe((data: any) => {
      this.listOfCars.set(data)
    })
  }

  openDetail(id: number) {
    this.router.navigateByUrl('detail/' + id)
  }
}
