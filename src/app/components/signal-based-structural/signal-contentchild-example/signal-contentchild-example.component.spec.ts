import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalContentchildExampleComponent } from './signal-contentchild-example.component';

describe('SignalContentchildExampleComponent', () => {
  let component: SignalContentchildExampleComponent;
  let fixture: ComponentFixture<SignalContentchildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalContentchildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalContentchildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
