import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalViewchildrenExampleComponent } from './signal-viewchildren-example.component';

describe('SignalViewchildrenExampleComponent', () => {
  let component: SignalViewchildrenExampleComponent;
  let fixture: ComponentFixture<SignalViewchildrenExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalViewchildrenExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalViewchildrenExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
