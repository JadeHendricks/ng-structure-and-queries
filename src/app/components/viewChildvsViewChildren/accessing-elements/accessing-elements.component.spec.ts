import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessingElementsComponent } from './accessing-elements.component';

describe('AccessingElementsComponent', () => {
  let component: AccessingElementsComponent;
  let fixture: ComponentFixture<AccessingElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessingElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessingElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
