import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-viewchild-child-example',
  imports: [],
  standalone: true,
  templateUrl: './signal-viewchild-child-example.component.html',
  styleUrl: './signal-viewchild-child-example.component.scss'
})
export class SignalViewchildChildExampleComponent {
  readonly count = signal(0);

  public inc(): void { 
    this.count.update(c => c + 1); 
  }

  public reset(): void { 
    this.count.set(0); 
  }
}
