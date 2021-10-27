import { Injectable } from '@angular/core';
import {CatalogService} from "./catalog.service";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: any;
  constructor(private catalogService: CatalogService) {}

  get data(): any {
    console.log('---getData---');
    return this._data;
  }

  set data(value: any) {
    console.log('----setData----');
    this._data = value;
  }

  init(searchParams: Params) {
    this.catalogService.getProducts(searchParams,(r: any) => this.data = r.items);
  }
}
