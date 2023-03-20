import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotsclesComponent } from './motscles.component';

describe('MotsclesComponent', () => {
  let component: MotsclesComponent;
  let fixture: ComponentFixture<MotsclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotsclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotsclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
