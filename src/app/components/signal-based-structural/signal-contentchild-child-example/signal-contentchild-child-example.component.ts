import { Component, contentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-signal-contentchild-child-example',
  imports: [],
  standalone: true,
  templateUrl: './signal-contentchild-child-example.component.html',
  styleUrl: './signal-contentchild-child-example.component.scss'
})
export class SignalContentchildChildExampleComponent {
  // Grab the element with template ref #title projected inside <ng-content>
  // contentChild → signal-based query for projected content
  // ElementRef → handle to a real DOM element.
  // Queries the projected element that has template ref #title.
  // Returns a signal you read by calling this.titleEl().
  readonly titleEl = contentChild<ElementRef<HTMLHeadingElement>>('title');

  public highlightTitle(): void {
    const title = this.titleEl();
    if (title) {
      title.nativeElement.style.color = 'red';
      title.nativeElement.innerHTML = 'Changed parents projection inside child with contentChild';
    }
  }
}
