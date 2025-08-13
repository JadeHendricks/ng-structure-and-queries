import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentExampleChildComponent } from './ng-content-example-child.component';

describe('NgContentExampleChildComponent', () => {
  let component: NgContentExampleChildComponent;
  let fixture: ComponentFixture<NgContentExampleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContentExampleChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentExampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
