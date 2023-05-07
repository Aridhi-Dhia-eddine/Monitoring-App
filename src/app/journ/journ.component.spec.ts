import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournComponent } from './journ.component';

describe('JournComponent', () => {
  let component: JournComponent;
  let fixture: ComponentFixture<JournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
