import { Component } from '@angular/core';

@Component({
  selector: 'app-child-example',
  imports: [],
  templateUrl: './child-example.component.html',
  styleUrl: './child-example.component.scss'
})
export class ChildExampleComponent {
  public count = 0;

  public incrementCount() {
    this.count++;
  }

  public decrementCount() {
    this.count--;
  }
}
