import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertisComponent } from './input-propertis.component';

describe('InputPropertisComponent', () => {
  let component: InputPropertisComponent;
  let fixture: ComponentFixture<InputPropertisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPropertisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
