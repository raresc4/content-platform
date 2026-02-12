import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPopup } from './content-popup';

describe('ContentPopup', () => {
  let component: ContentPopup;
  let fixture: ComponentFixture<ContentPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
