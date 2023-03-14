import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererResponsableComponent } from './gerer-responsable.component';

describe('GererResponsableComponent', () => {
  let component: GererResponsableComponent;
  let fixture: ComponentFixture<GererResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
