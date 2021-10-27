import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../types/product";
import { environment } from 'src/environments/environment';
import { ProductModule } from "../product/product.module";
import { Params } from '@angular/router';

@Injectable({
  providedIn: ProductModule
})
export class ProductService {

  private static API_PRODUCTS: string = `${environment.api}/api/products`;

  constructor(private httpClient: HttpClient) { }

  public getProducts(searchParams: Params): Promise<Product[]> {
    return this.httpClient.get<Product[]>(ProductService.API_PRODUCTS, searchParams).toPromise();
  }

  public getProductById(id: number): Promise<Product> {
    return this.httpClient.get<Product>(`${ProductService.API_PRODUCTS}/${id}`).toPromise();
  }
}
