import { Injectable } from '@angular/core';
import { ProductService } from "./product.service";
import { products } from '../data/products.data';
import { Params } from "@angular/router";
import { Observable } from "rxjs";
import { ProductCatalog } from "../types/product";

@Injectable()
export class CatalogService {

  constructor(private productService: ProductService) {
  }

  public getProducts$(searchParams: Params): Observable<ProductCatalog> {
    return this.productService.getProducts$(searchParams);
  }

  public getProductById(id: number, callback: Function) {
    this.productService.getProductById(id).then(r => callback(r)).catch(e => {
      callback(products.filter(p => p.id == id));
    });
  }

//
//   //TODO: needs to change sorting
//   private sortBy(search: string, products: Product[]) : Product[] {
//     const data = products.slice();
//     if(!search) {
//       return products;
//     }
//     return data.filter(p => {
//       return p.title?.toLocaleLowerCase().includes(search);
//     });
//   }
//
//   private filterBy(filterBy: string, products: Product[]) : Product[] {
//     const data = products.slice();
//     if(!filterBy || filterBy == 'none') {
//       return products;
//     }
//     return data.sort((a, b) => {
//       switch (filterBy) {
//         case 'actionPrice': return compare(a.price?.value, b.price?.value);
//         case 'available': return compare(a.availability, b.availability);
//         default: return 0;
//       }
//     });
//   }
// }
//
// function compare(a: any, b: any) {
//   return (a < b ? -1 : 1) * 1;
// }
}
