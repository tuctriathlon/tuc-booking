import {User} from "./user.model";

export class Car {
  id: string;
  name: string;
  nbSeats: number;
  nbBikes: number;
  passengers: User[] = [];

  public static Create(name: string): Car {
    const car = new Car();
    car.name = name;
    car.nbBikes = 0;
    car.nbSeats = 5;
    car.passengers = [];
    car.id = Math.floor(Math.random() *10000).toString(10);
    return car;
  }

  get canAddPassenger():boolean {
    return this.passengers.length < this.nbSeats;
  }

  public addPassenger(passenger: User): void {
    if (this.canAddPassenger) {
      this.passengers.push(passenger)
    }
  }

  public removePassenger(passenger: User): void {
    const index = this.passengers.findIndex(p => p === passenger);
    if (index >= 0) {
      this.passengers.splice(index, 1)
    }
  }
}
