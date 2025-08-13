import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-templateoutlet-example',
  imports: [NgTemplateOutlet],
  standalone: true,
  templateUrl: './ng-templateoutlet-example.component.html',
  styleUrl: './ng-templateoutlet-example.component.scss'
})
export class NgTemplateoutletExampleComponent {
  public article: {title: string} | null = {title: "Foo"};
}
