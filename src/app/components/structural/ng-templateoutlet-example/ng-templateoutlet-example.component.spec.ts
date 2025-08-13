import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateoutletExampleComponent } from './ng-templateoutlet-example.component';

describe('NgTemplateoutletExampleComponent', () => {
  let component: NgTemplateoutletExampleComponent;
  let fixture: ComponentFixture<NgTemplateoutletExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateoutletExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateoutletExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
