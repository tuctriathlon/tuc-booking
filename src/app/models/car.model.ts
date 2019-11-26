export class Car {
  id: string;
  name: string;
  nbSeats: number;
  nbBikes: number;
  ownerId: string;

  public static Create(name: string, owner: string): Car {
    const car = new Car();
    car.ownerId = owner;
    car.name = name;
    car.nbBikes = 0;
    car.nbSeats = 4;
    car.id = Math.floor(Math.random() *10000).toString(10);
    return car;
  }
}
