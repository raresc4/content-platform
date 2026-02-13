import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentTab, UploadOption } from '../../../models/media-item.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() searchQuery = '';
  @Input() contentTabs: ContentTab[] = [];
  @Input() uploadOptions: UploadOption[] = [];
  @Input() showUploadDropdown = false;

  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() contentTabChange = new EventEmitter<'all' | 'my-uploads'>();
  @Output() uploadClick = new EventEmitter<UploadOption>();
  @Output() uploadDropdownToggle = new EventEmitter<void>();
  @Output() userIconClick = new EventEmitter<void>();

  showMobileMenu = false;
  showMobileSearch = false;

  onSearchChange(value: string): void {
    this.searchQueryChange.emit(value);
  }

  onContentTabClick(tabId: 'all' | 'my-uploads'): void {
    this.contentTabChange.emit(tabId);
  }

  onUploadButtonClick(): void {
    this.uploadDropdownToggle.emit();
  }

  onUploadOptionClick(option: UploadOption): void {
    this.uploadClick.emit(option);
  }

  onUserIconClick(): void {
    this.userIconClick.emit();
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
    if (this.showMobileMenu) {
      this.showMobileSearch = false;
    }
  }

  toggleMobileSearch(): void {
    this.showMobileSearch = !this.showMobileSearch;
    if (this.showMobileSearch) {
      this.showMobileMenu = false;
    }
  }

  closeMobileMenu(): void {
    this.showMobileMenu = false;
  }

  closeMobileSearch(): void {
    this.showMobileSearch = false;
  }
}
