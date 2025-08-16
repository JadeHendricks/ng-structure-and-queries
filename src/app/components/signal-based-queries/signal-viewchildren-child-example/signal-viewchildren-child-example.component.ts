import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-viewchildren-child-example',
  imports: [],
  standalone: true,
  templateUrl: './signal-viewchildren-child-example.component.html',
  styleUrl: './signal-viewchildren-child-example.component.scss'
})
export class SignalViewchildrenChildExampleComponent {
  readonly color = signal('white');
  public label = 'Box';

  public setColor(newColor: string): void {
    this.color.set(newColor);
  }
}
