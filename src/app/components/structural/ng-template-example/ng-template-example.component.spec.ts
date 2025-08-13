import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateExampleComponent } from './ng-template-example.component';

describe('NgtemplateExampleComponent', () => {
  let component: NgtemplateExampleComponent;
  let fixture: ComponentFixture<NgtemplateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgtemplateExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
