import { Component } from '@angular/core';
import { SignalContentchildChildExampleComponent } from '../signal-contentchild-child-example/signal-contentchild-child-example.component';
import { SignalContentchildChildSecondExampleComponent } from '../signal-contentchild-child-second-example/signal-contentchild-child-second-example.component';

@Component({
  selector: 'app-signal-contentchild-example',
  imports: [SignalContentchildChildExampleComponent, SignalContentchildChildSecondExampleComponent],
  templateUrl: './signal-contentchild-example.component.html',
  styleUrl: './signal-contentchild-example.component.scss'
})
export class SignalContentchildExampleComponent {

}
