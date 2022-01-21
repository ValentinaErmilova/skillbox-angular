import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: any;
  constructor() {}

  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }

  init() {
    // типо сервис для получения настроек сайта
    this.data = {}
  }
}
