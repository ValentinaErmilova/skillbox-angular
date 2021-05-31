import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  inCart = 0;

  addToCart() {
    this.inCart++;
  }

  removeFromCart() {
    return this.inCart > 0 ? this.inCart-- : this.inCart;
  }
}
