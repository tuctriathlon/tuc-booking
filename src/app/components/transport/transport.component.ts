import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Car} from "../../models/car.model";
import {Bike} from "../../models/bike.model";
import {CarService} from "../../services/car.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit, OnDestroy {
  public users;
  public passengers: User[] = [];
  public cars: Car[] = [];
  public bikes: Bike[] = [];
  private subscribtions: Subscription[];

  constructor(private userService: UserService,
              private carService: CarService) {
    this.subscribtions = [];
  }

  ngOnInit() {
    // this.userService.getAll().subscribe(res => {
    //   this.users = res;
    // });
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

  ngOnDestroy(): void {
    this.subscribtions.forEach(sub => {
      sub.unsubscribe();
    })
  }
}
