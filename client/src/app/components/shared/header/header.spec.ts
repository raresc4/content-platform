import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search query change', () => {
    spyOn(component.searchQueryChange, 'emit');
    const testQuery = 'test search';

    component.onSearchChange(testQuery);

    expect(component.searchQueryChange.emit).toHaveBeenCalledWith(testQuery);
  });

  it('should emit content tab change', () => {
    spyOn(component.contentTabChange, 'emit');
    const tabId = 'my-uploads';

    component.onContentTabClick(tabId);

    expect(component.contentTabChange.emit).toHaveBeenCalledWith(tabId);
  });

  it('should emit upload dropdown toggle', () => {
    spyOn(component.uploadDropdownToggle, 'emit');

    component.onUploadButtonClick();

    expect(component.uploadDropdownToggle.emit).toHaveBeenCalled();
  });

  it('should emit upload click with option', () => {
    spyOn(component.uploadClick, 'emit');
    const option = { label: 'Upload Video', type: 'video' as const };

    component.onUploadOptionClick(option);

    expect(component.uploadClick.emit).toHaveBeenCalledWith(option);
  });

  it('should emit user icon click', () => {
    spyOn(component.userIconClick, 'emit');

    component.onUserIconClick();

    expect(component.userIconClick.emit).toHaveBeenCalled();
  });
});
