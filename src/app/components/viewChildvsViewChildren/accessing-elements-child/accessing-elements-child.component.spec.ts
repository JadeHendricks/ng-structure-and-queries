import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessingElementsChildComponent } from './accessing-elements-child.component';

describe('AccessingElementsChildComponent', () => {
  let component: AccessingElementsChildComponent;
  let fixture: ComponentFixture<AccessingElementsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessingElementsChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessingElementsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
