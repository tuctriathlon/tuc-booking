import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { TransportComponent } from './components/transport/transport.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AdminComponent } from './components/admin/admin.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {environment} from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserListComponent,
    UserComponent,
    TransportComponent,
    RoomsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
