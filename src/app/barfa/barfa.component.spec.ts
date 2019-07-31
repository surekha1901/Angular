import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarfaComponent } from './barfa.component';

describe('BarfaComponent', () => {
  let component: BarfaComponent;
  let fixture: ComponentFixture<BarfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
