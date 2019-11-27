import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {CarService} from "./car.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = []
  constructor(private carService: CarService) {
    for( let i = 0; i < 15; i++) {
      this.users.push(User.Create(`test${i}`, `test${i}`, `test${i}@mail.fr`));
    }
  }

  public getAll(): User[] {
    return this.users;
  }

  public getRemainingUser(): User[] {
    return this.users.filter(u => !this.getAllPassengers().some(p => p === u))
  }

  public getAllPassengers(): User[] {
    const passengers = [];
    this.carService.getAll().forEach(car => {
      passengers.push(car.passengers)
    })
    return passengers;
  }
}
