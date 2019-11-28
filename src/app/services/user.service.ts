import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {CarService} from "./car.service";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {AbstractResourceService} from "./abstract-resource.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractResourceService<User>{
  users: AngularFireList<User> = null;
  constructor(protected db: AngularFireDatabase,
              private carService: CarService) {
    super('/users', db);
  }

  public getAllPassengers(): User[] {
    const passengers = [];
    this.carService.getAll().forEach(car => {
      passengers.push(car.passengers)
    })
    return passengers;
  }
}
