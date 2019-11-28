import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserComponent} from "./components/user/user.component";
import {TransportComponent} from "./components/transport/transport.component";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {AdminComponent} from "./components/admin/admin.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user', component: UserComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
