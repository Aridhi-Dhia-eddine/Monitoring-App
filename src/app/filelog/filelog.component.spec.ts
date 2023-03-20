import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilelogComponent } from './filelog.component';

describe('FilelogComponent', () => {
  let component: FilelogComponent;
  let fixture: ComponentFixture<FilelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
