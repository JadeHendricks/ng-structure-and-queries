import { Component } from '@angular/core';

@Component({
  selector: 'app-accessing-elements-child',
  imports: [],
  standalone: true,
  templateUrl: './accessing-elements-child.component.html',
  styleUrl: './accessing-elements-child.component.scss'
})
export class AccessingElementsChildComponent {
  public count = 0;

  public incrementCount() {
    this.count++;
  }

  public decrementCount() {
    this.count--;
  }
}
