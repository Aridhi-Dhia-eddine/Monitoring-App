import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererSIComponent } from './gerer-si.component';

describe('GererSIComponent', () => {
  let component: GererSIComponent;
  let fixture: ComponentFixture<GererSIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererSIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
