import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {CatalogService} from "../services/catalog.service";
import {Product} from "../types/product";

@Component({
  selector: 'app-catalog',
  templateUrl: "catalog.component.html",
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {
  @Output() addToCard = new EventEmitter<number>();
  //title?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dataService: DataService,
    private catalogService: CatalogService) {
    //this.title = this.route.snapshot.data.title;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.dataService.init(params));
  }

  setSearch(filterBy: string, search: string) {
    let param: Params = {};
    if (search) {
      param['search'] = search;
    }
    param['filterBy'] = filterBy;
    this.router.navigate(['.'],
      {
        relativeTo: this.route,
        queryParams: param
      })
  }

  public openProduct(id: number) {
    this.catalogService.getProductById(id, (r: Product) => {
      this.router.navigate(['/product/' + id], {state: {data: r}});
    })
  }
}
