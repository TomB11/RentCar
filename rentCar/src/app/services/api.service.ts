import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal, Signal } from '@angular/core';
import { Cars } from '../cars';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public listOfCars = signal<Cars[]>([]);
  public carsFounded: Signal<number> = computed(() => this.listOfCars().length)

  constructor(public http: HttpClient) { }

  getAllCars() {
    return this.http.get("assets/data/cars.json")
  }

  getSearchedCar(searchValue: string) {
    this.http.get<Cars>("assets/data/cars.json").subscribe((data: any) => {
      let found = false
      data.filter((item: Cars) => {
        found = item.brand.toLowerCase().includes(searchValue.toLowerCase());
        if (found) {
          this.listOfCars.update(values => {
              return [...values, item];
          });
        } else {
          found = item.model.toLowerCase().includes(searchValue.toLowerCase());
          if (found) {
            this.listOfCars.update(values => {
                return [...values, item];
            });
          }
        }
      })
    })
  }
}
