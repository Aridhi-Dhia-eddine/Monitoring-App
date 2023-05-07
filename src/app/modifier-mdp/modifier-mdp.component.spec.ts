import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMDPComponent } from './modifier-mdp.component';

describe('ModifierMDPComponent', () => {
  let component: ModifierMDPComponent;
  let fixture: ComponentFixture<ModifierMDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
