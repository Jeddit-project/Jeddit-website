import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjedditComponent } from './subjeddit.component';

describe('SubjedditComponent', () => {
  let component: SubjedditComponent;
  let fixture: ComponentFixture<SubjedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
