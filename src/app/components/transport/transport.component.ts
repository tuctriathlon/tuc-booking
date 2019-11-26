import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Car} from "../../models/car.model";
import {Bike} from "../../models/bike.model";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  public users: User[] = [];
  public cars: Car[] = [];
  public bikes: Bike[] = [];

  constructor(private userService: UserService,
              private carService: CarService) { }

  ngOnInit() {
    this.users = this.userService.getAll();
    this.cars = this.carService.getAll();
  }

  addPassenger(event) {
    console.log(event);
  }

}
