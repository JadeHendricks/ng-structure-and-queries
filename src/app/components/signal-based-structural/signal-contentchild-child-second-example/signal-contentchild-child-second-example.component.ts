import { CommonModule } from '@angular/common';
import { afterNextRender, Component, contentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-signal-contentchild-child-second-example',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './signal-contentchild-child-second-example.component.html',
  styleUrl: './signal-contentchild-child-second-example.component.scss'
})
export class SignalContentchildChildSecondExampleComponent {
  // Get the projected <input #userInput>
  readonly userInput = contentChild<ElementRef<HTMLInputElement>>('userInput');
  public initialValue: string | null = null;

  constructor() {
    afterNextRender(() => {
      const input = this.userInput();
      if (input) {
        this.initialValue = input.nativeElement.value || '(empty)';

        // here we are taking our projected input and updating it's value to "Empty"
        this.initialValue = input.nativeElement.value = '(empty)';
      }
    });
  }
}
