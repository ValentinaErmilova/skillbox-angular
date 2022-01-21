import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogService} from "../services/catalog.service";
import {Observable} from "rxjs";
import {ProductCatalog} from '../types/product';

@Component({
  selector: 'app-catalog',
  templateUrl: "catalog.component.html",
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {
  @Output() addToCard = new EventEmitter<number>();
  @Input() hasPriceSearch = false;
  private searchParam = {};
  public catalog$?: Observable<ProductCatalog>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService) {
  }

  ngOnInit(): void {
    this.catalog$ = this.catalogService.getProducts$(this.searchParam);
  }

  setSearch(param: {[key: string]: string}) {
    this.hasPriceSearch = true;
    this.searchParam = {
      ...this.searchParam,
      ...param
    };
    this.catalog$ = this.catalogService.getProducts$(this.searchParam);
  }
}
