import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-example',
  imports: [CommonModule],
  templateUrl: './ng-template-example.component.html',
  styleUrl: './ng-template-example.component.scss'
})
export class NgtemplateExampleComponent {
  public article: {title: string} | null = {title: "Foo"};
}
