import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildExampleComponent } from '../child-example/child-example.component';

@Component({
  selector: 'app-viewchild-example',
  imports: [ChildExampleComponent],
  standalone: true,
  templateUrl: './viewchild-example.component.html',
  styleUrl: './viewchild-example.component.scss'
})
export class ViewchildComponent implements AfterViewInit {
  // we can get access to the child component methods and properties from our parent component.
  // static true means that the child component is not wrapped in an ngIf or ngFor. (and is available immediately)
  // ? is used to avoid null reference errors as initialy the child component is undfined
  @ViewChild(ChildExampleComponent, {static: true}) child?: ChildExampleComponent;

  // using viewChild with an element reference ("#button")
  @ViewChild('button', {static: true}) buttonRef?: ElementRef<HTMLButtonElement>;

  public incrementCount(): void {
    this.child?.incrementCount();
  }

  ngAfterViewInit(): void {
    if (this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.innerHTML = 'Increment Button (Updated)';
    }
  }
}
