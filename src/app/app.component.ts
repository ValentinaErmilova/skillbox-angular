import {Component} from '@angular/core';
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0;

  constructor(public cartService: CartService) {}

  onActivate(e : any) {
    e.addToCard?.subscribe((count: number) => this.count = count);
  }
}
