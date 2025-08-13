import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildrenExampleComponent } from './viewchildren-example.component';

describe('ViewchildrenExampleComponent', () => {
  let component: ViewchildrenExampleComponent;
  let fixture: ComponentFixture<ViewchildrenExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildrenExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewchildrenExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
