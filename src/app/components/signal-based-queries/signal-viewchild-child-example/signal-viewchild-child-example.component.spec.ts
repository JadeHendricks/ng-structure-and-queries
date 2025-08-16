import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalViewchildChildExampleComponent } from './signal-viewchild-child-example.component';

describe('SignalViewchildChildExampleComponent', () => {
  let component: SignalViewchildChildExampleComponent;
  let fixture: ComponentFixture<SignalViewchildChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalViewchildChildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalViewchildChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
