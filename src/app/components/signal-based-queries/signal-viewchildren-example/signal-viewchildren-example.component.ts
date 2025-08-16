import { Component, ElementRef, viewChildren } from '@angular/core';
import { SignalViewchildrenChildExampleComponent } from '../signal-viewchildren-child-example/signal-viewchildren-child-example.component';

@Component({
  selector: 'app-signal-viewchildren-example',
  imports: [SignalViewchildrenChildExampleComponent],
  standalone: true,
  templateUrl: './signal-viewchildren-example.component.html',
  styleUrl: './signal-viewchildren-example.component.scss'
})
export class SignalViewchildrenExampleComponent {
  // Signal-based query: gets all inputs with #field
  readonly fields = viewChildren<ElementRef<HTMLInputElement>>('field');
  
  // Collect all child childComponents
  // viewChildren(SignalViewchildrenChildExampleComponent) returns a signal of an array that auto-updates if you add/remove boxes.
  readonly childComponent = viewChildren(SignalViewchildrenChildExampleComponent);

  // Looks for the first input in the list that doesn't have a value and focuses on that one.
  public focusFirstEmpty(): void {
    const inputs = this.fields(); // array of ElementRef
    const firstEmpty = inputs.find(el => !el.nativeElement.value);
    firstEmpty?.nativeElement.focus();
  }

  // calls the setColour on the child component to handle it's internal styling
  public setAll(color: string): void {
    this.childComponent().forEach(box => box.setColor(color));
  }

  // calls the setColour on the child component to handle it's internal styling
  public reset(): void {
    this.childComponent().forEach(box => box.setColor('white'));
  }
}
