import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Car} from "../../models/car.model";
import {Bike} from "../../models/bike.model";
import {CarService} from "../../services/car.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  public users: User[] = [];
  public passengers: User[] = [];
  public cars: Car[] = [];
  public bikes: Bike[] = [];

  constructor(private userService: UserService,
              private carService: CarService) { }

  ngOnInit() {
    this.users = this.userService.getRemainingUser();
    this.cars = this.carService.getAll();
  }

  tableIds(value: string): string[] {
    return this.cars.map(c => `car${c.id}`).concat(['usersWithoutCar', 'bikeRemaining']).filter(id => id !== value)
  }
  canAddPassenger(car:Car):boolean {
    return car.canAddPassenger
  }
  drop(event: CdkDragDrop<User[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
