import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../types/product";
import { environment } from 'src/environments/environment';
import { ProductCardModule } from "../product-card/product-card.module";
import { Params } from '@angular/router';

@Injectable({
  providedIn: ProductCardModule
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(searchParams: Params): Promise<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.api}/products`, searchParams).toPromise();
  }

  public getProductById(id: number): Promise<Product> {
    return this.httpClient.get<Product>(`${environment.api}/products/${id}`).toPromise();
  }
}
