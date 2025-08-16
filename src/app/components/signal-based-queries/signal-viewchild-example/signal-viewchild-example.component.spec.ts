import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalViewchildExampleComponent } from './signal-viewchild-example.component';

describe('SignalViewchildExampleComponent', () => {
  let component: SignalViewchildExampleComponent;
  let fixture: ComponentFixture<SignalViewchildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalViewchildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalViewchildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
