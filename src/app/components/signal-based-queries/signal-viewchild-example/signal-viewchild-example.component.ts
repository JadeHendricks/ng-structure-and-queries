import { Component, effect, ElementRef, Signal, signal, viewChild, ViewChild } from '@angular/core';
import { SignalViewchildChildExampleComponent } from '../signal-viewchild-child-example/signal-viewchild-child-example.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-viewchild-example',
  imports: [CommonModule, SignalViewchildChildExampleComponent],
  standalone: true,
  templateUrl: './signal-viewchild-example.component.html',
  styleUrl: './signal-viewchild-example.component.scss'
})
export class SignalViewchildExampleComponent {
  // Signal-based query (throws if the element is missing)
  // viewChild.required(...) returns a signal; read it with this.searchEl().
  // You don’t need ngAfterViewInit—you can call it anytime after the view is ready (e.g., in a click handler or afterNextRender if you want auto-focus on init).
  readonly searchEl: Signal<ElementRef<HTMLInputElement>> = viewChild.required<ElementRef<HTMLInputElement>>('search');


  // Signal-based query to the child component instance
  // If the child were conditionally rendered, the signal would update to undefined/null when it disappears—no manual bookkeeping.
  // viewChild(SignalViewchildChildExampleComponent) → returns a signal, read it with this.counter().
  // No need for ngAfterViewInit / ngAfterViewChecked.
  // Automatically stays in sync with template (appears/disappears).
  readonly counter = viewChild(SignalViewchildChildExampleComponent);

  public focusSearch(): void {
    this.searchEl().nativeElement.focus();
  }

  public resetChild(): void {
    this.counter()?.reset();
  }
}
