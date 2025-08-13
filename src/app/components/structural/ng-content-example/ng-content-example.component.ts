import { Component } from '@angular/core';
import { NgContentExampleChildComponent } from '../ng-content-example-child/ng-content-example-child.component';

@Component({
  selector: 'app-ng-content-example',
  imports: [NgContentExampleChildComponent],
  standalone: true,
  templateUrl: './ng-content-example.component.html',
  styleUrl: './ng-content-example.component.scss'
})
export class NgContentExampleComponent {
  public article: {title: string} | null = {title: "Foo"};
}
