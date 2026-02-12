import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePopup } from './image-popup';

describe('ImagePopup', () => {
  let component: ImagePopup;
  let fixture: ComponentFixture<ImagePopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
