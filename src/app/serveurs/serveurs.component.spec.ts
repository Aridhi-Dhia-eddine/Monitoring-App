import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeursComponent } from './serveurs.component';

describe('ServeursComponent', () => {
  let component: ServeursComponent;
  let fixture: ComponentFixture<ServeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
