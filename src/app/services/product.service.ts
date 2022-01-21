import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Product } from "../types/product";
import { environment } from 'src/environments/environment';
import { ProductModule } from "../product/product.module";
import { Params } from '@angular/router';
import { Observable } from "rxjs";
import { ProductCatalog } from "../types/product";

@Injectable({
  providedIn: ProductModule
})
export class ProductService {

  private static API_PRODUCTS: string = `${environment.api}/api/products`;

  constructor(private httpClient: HttpClient) { }

  public getProducts$(searchParams: Params): Observable<ProductCatalog> {
    const params = new HttpParams()
      .set("name", searchParams?.name)
      .set("brandName", "")
      .set("orderBy", "");
    return this.httpClient.get<ProductCatalog>(ProductService.API_PRODUCTS, {params});
  }

  public getProductById(id: number): Promise<Product> {
    return this.httpClient.get<Product>(`${ProductService.API_PRODUCTS}/${id}`).toPromise();
  }
}
