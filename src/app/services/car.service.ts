import { Injectable } from '@angular/core';
import {Car} from "../models/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = [];
  constructor() {
    this.cars.push(Car.Create('voiture 1', 'azerty'));
    this.cars.push(Car.Create('voiture 2', 'sfgs'));
    this.cars.push(Car.Create('voiture 3', 'azeyjeytrty'));
    this.cars.push(Car.Create('voiture 4', 'kuydgfds'));
    this.cars.push(Car.Create('voiture 5', 'sfse'));
    this.cars.push(Car.Create('voiture 6', 'eqfdf'));
  }

  public getAll(): Car[] {
    return this.cars;
  }
}
