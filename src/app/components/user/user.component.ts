import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  public users: any[];
  private subscriptions: Subscription[];
  constructor(private userService: UserService) {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.subscriptions.push(this.userService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          (User.Create({ key: c.payload.key, ...c.payload.val() }))
        )
      ))
      .subscribe(users => {
        this.users = users
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  addUser() {
    const rand = Math.floor(Math.random()*100)
    const user = User.Create({firstName:'test', lastName:`test${rand}`, mail:`test${rand}@mail.fr`})
    this.userService.add(user)
  }

  delete(user: User) {
    return this.userService.delete(user);
  }

}
