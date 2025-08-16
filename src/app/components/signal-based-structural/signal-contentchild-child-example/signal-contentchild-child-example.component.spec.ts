import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalContentchildChildExampleComponent } from './signal-contentchild-child-example.component';

describe('SignalContentchildChildExampleComponent', () => {
  let component: SignalContentchildChildExampleComponent;
  let fixture: ComponentFixture<SignalContentchildChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalContentchildChildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalContentchildChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
