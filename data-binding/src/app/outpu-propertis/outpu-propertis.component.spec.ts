import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpuPropertisComponent } from './outpu-propertis.component';

describe('OutpuPropertisComponent', () => {
  let component: OutpuPropertisComponent;
  let fixture: ComponentFixture<OutpuPropertisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutpuPropertisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpuPropertisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
