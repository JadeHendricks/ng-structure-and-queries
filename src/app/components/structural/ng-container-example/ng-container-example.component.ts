import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container-example',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './ng-container-example.component.html',
  styleUrl: './ng-container-example.component.scss'
})
export class NgContainerExampleComponent {
  public numbers: number[] = [1, 2, 3];
}
