import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalViewchildrenChildExampleComponent } from './signal-viewchildren-child-example.component';

describe('SignalViewchildrenChildExampleComponent', () => {
  let component: SignalViewchildrenChildExampleComponent;
  let fixture: ComponentFixture<SignalViewchildrenChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalViewchildrenChildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalViewchildrenChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
