import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitialisationMDPuserSmComponent } from './reinitialisation-mdpuser-sm.component';

describe('ReinitialisationMDPuserSmComponent', () => {
  let component: ReinitialisationMDPuserSmComponent;
  let fixture: ComponentFixture<ReinitialisationMDPuserSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinitialisationMDPuserSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitialisationMDPuserSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
