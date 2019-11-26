import { Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = []
  constructor() {
    this.users.push(User.Create('test1', 'test1', 'test1@mail.fr'));
    this.users.push(User.Create('test2', 'test2', 'test2@mail.fr'));
    this.users.push(User.Create('test3', 'test3', 'test3@mail.fr'));
    this.users.push(User.Create('test4', 'test4', 'test4@mail.fr'));
    this.users.push(User.Create('test5', 'test5', 'test5@mail.fr'));
  }

  public getAll(): User[] {
    return this.users;
  }
}
