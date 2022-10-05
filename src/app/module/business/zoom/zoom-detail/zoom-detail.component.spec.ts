import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomDetailComponent } from './zoom-detail.component';

describe('ZoomDetailComponent', () => {
  let component: ZoomDetailComponent;
  let fixture: ComponentFixture<ZoomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
