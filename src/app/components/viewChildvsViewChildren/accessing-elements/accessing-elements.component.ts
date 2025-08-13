import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AccessingElementsChildComponent } from '../accessing-elements-child/accessing-elements-child.component';

@Component({
  selector: 'app-accessing-elements',
  imports: [AccessingElementsChildComponent],
  templateUrl: './accessing-elements.component.html',
  styleUrl: './accessing-elements.component.scss'
})
export class AccessingElementsComponent implements AfterViewInit{
  // we can get access to the child component methods and properties from our parent component.
  // static true means that the child component is not wrapped in an ngIf or ngFor. (and is available immediately)
  // ? is used to avoid null reference errors as initialy the child component is undfined
  @ViewChild(AccessingElementsChildComponent, {static: true}) child?: AccessingElementsChildComponent;

  // using viewChild with an element reference ("#button")
  @ViewChild('button', {static: true}) buttonRef?: ElementRef<HTMLButtonElement>;

  // using viewChildren to get a list of all child components
  // this is useful when you have multiple instances of the same component and you want to access
  @ViewChildren(AccessingElementsChildComponent) children?: QueryList<AccessingElementsChildComponent>;

  // using viewChildren with an element reference ("#button")
  @ViewChildren('button') buttonRefs?: QueryList<ElementRef<HTMLButtonElement>>;

  public incrementCount(): void {
    this.child?.incrementCount();
  }

  // the reason we use ngAfterViewInit is because the view is not fully initialized until after the component has been created.
  // and we want to make sure our element is available before we try to access it.
  ngAfterViewInit(): void {
    if (this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.innerHTML = 'Increment Button (Updated)';
    }

    // we have a element ref here, which is a reference to the DOM element inside our markup.
    this.children?.forEach((child => console.log('Child Component:', child)));
    this.buttonRefs?.forEach((buttonRef => console.log('Buttont:', buttonRef)));
  }
}
