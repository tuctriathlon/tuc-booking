import { Injectable } from '@angular/core';
import {Car} from "../models/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = [];
  constructor() {
    this.cars.push(Car.Create('voiture 1'));
    this.cars.push(Car.Create('voiture 2'));
    this.cars.push(Car.Create('voiture 3'));
    this.cars.push(Car.Create('voiture 4'));
    this.cars.push(Car.Create('voiture 5'));
    this.cars.push(Car.Create('voiture 6'));
  }

  public getAll(): Car[] {
    return this.cars;
  }
}
