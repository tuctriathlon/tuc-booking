import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Resource} from "../models/resource.model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractResourceService<T extends Resource<T>> {
  private readonly path: string;
  protected dataList: AngularFireList<T>;
  protected constructor(path: string,
                        protected db: AngularFireDatabase) {
    this.path = path;
    this.dataList = db.list(this.path)
  }

  add(data: T) {
    this.dataList.push(data.toDbFormat())
  }

  update(data: T){
    return this.dataList.set(data.key, data)
  }

  delete(data: T){
    return this.dataList.remove(data.key)
  }

  getAll() {
    return this.dataList
  }

  deleteALl() {
    return this.dataList.remove();
  }
}
