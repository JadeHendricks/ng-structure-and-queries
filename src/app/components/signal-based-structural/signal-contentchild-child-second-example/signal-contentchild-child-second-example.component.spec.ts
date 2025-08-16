import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalContentchildChildSecondExampleComponent } from './signal-contentchild-child-second-example.component';

describe('SignalContentchildChildSecondExampleComponent', () => {
  let component: SignalContentchildChildSecondExampleComponent;
  let fixture: ComponentFixture<SignalContentchildChildSecondExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalContentchildChildSecondExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalContentchildChildSecondExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
