import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../types/product";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Promise<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.api}/products`).toPromise();
  }
}
