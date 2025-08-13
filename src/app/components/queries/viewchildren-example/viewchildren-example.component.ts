import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ChildExampleComponent } from '../child-example/child-example.component';

@Component({
  selector: 'app-viewchildren-example',
  imports: [ChildExampleComponent],
  standalone: true,
  templateUrl: './viewchildren-example.component.html',
  styleUrl: './viewchildren-example.component.scss'
})
export class ViewchildrenExampleComponent {
    // using viewChildren to get a list of all child components
  // this is useful when you have multiple instances of the same component and you want to access
  @ViewChildren(ChildExampleComponent) children?: QueryList<ChildExampleComponent>;

  // using viewChildren with an element reference ("#button")
  @ViewChildren('button') buttonRefs?: QueryList<ElementRef<HTMLButtonElement>>;
  
  ngAfterViewInit(): void {
    // we have a element ref here, which is a reference to the DOM element inside our markup.
    this.children?.forEach((child => console.log('Child Component:', child)));
    this.buttonRefs?.forEach((buttonRef => console.log('Buttont:', buttonRef)));
  }
}
