import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0;

  onActivate(e : any) {
    e.addToCard?.subscribe((count: number) => this.count = count);
  }
}
