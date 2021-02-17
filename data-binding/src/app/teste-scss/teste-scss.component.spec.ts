import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteScssComponent } from './teste-scss.component';

describe('TesteScssComponent', () => {
  let component: TesteScssComponent;
  let fixture: ComponentFixture<TesteScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
