import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaService } from '../../services/media.service';
import {
  MediaItem,
  MediaFilter,
  FilterTab,
  ContentTab,
  UploadOption,
} from '../../models/media-item.model';
import { ImagePopup } from '../image-popup/image-popup';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-dashboard-page',
  imports: [CommonModule, FormsModule, ImagePopup, Header],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage implements OnInit, OnDestroy {
  mediaService = inject(MediaService);
  router = inject(Router);

  showUploadDropdown = false;
  mediaItems: MediaItem[] = [];
  currentSearchQuery = '';
  currentActiveFilter: MediaFilter = 'all';
  currentActiveSort = 'name-asc';

  selectedMediaItem: MediaItem | null = null;
  showImagePopup = false;

  private subscriptions = new Subscription();

  contentTabs: ContentTab[] = [
    { id: 'all', label: 'All Content', active: true },
    { id: 'my-uploads', label: 'My Uploads', active: false },
  ];

  filterTabs: FilterTab[] = [
    { id: 'all', label: 'All Media' },
    { id: 'videos', label: 'Videos' },
    { id: 'images', label: 'Images' },
    { id: 'pdfs', label: 'PDFs' },
  ];

  uploadOptions: UploadOption[] = [
    { label: 'Upload Video', type: 'video' },
    { label: 'Upload Images', type: 'image' },
    { label: 'Upload PDF', type: 'pdf' },
  ];

  sortOptions = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'date-desc', label: 'Date (Newest)' },
    { value: 'date-asc', label: 'Date (Oldest)' },
    { value: 'size-desc', label: 'Size (Largest)' },
    { value: 'size-asc', label: 'Size (Smallest)' },
  ];

  ngOnInit(): void {
    // Subscribe to filtered and sorted media
    this.subscriptions.add(
      this.mediaService.filteredAndSortedMedia$.subscribe((items) => {
        this.mediaItems = items;
      }),
    );

    // Subscribe to filter changes
    this.subscriptions.add(
      this.mediaService.activeFilter$.subscribe((filter) => {
        this.currentActiveFilter = filter;
      }),
    );

    // Subscribe to search query changes
    this.subscriptions.add(
      this.mediaService.searchQuery$.subscribe((query) => {
        this.currentSearchQuery = query;
      }),
    );

    // Subscribe to sort changes
    this.subscriptions.add(
      this.mediaService.activeSort$.subscribe((sort) => {
        this.currentActiveSort = sort;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  get searchQuery(): string {
    return this.currentSearchQuery;
  }

  set searchQuery(value: string) {
    this.mediaService.setSearchQuery(value);
  }

  get activeFilter(): MediaFilter {
    return this.currentActiveFilter;
  }

  get activeSort(): string {
    return this.currentActiveSort;
  }

  set activeSort(value: string) {
    this.mediaService.setActiveSort(value as any);
  }

  setContentTab(tabId: 'all' | 'my-uploads'): void {
    this.contentTabs.forEach((tab) => (tab.active = tab.id === tabId));
    this.mediaService.setActiveContentTab(tabId);
  }

  setFilter(filter: MediaFilter): void {
    this.mediaService.setActiveFilter(filter);
  }

  toggleUploadDropdown(): void {
    this.showUploadDropdown = !this.showUploadDropdown;
  }

  handleUpload(option: UploadOption): void {
    console.log('Upload:', option.label);
    this.showUploadDropdown = false;
    // Implement upload logic here
  }

  handleUserIconClick(): void {
    this.router.navigate(['/profile']);
    // Navigate to profile page or show user menu
  }

  downloadMedia(item: MediaItem): void {
    this.mediaService.downloadMedia(item);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  formatDate(date: Date): string {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  formatViews(views: number): string {
    return views.toLocaleString();
  }

  getBadgeClass(type: string): string {
    return `badge-${type}`;
  }

  getBadgeLabel(item: MediaItem): string {
    return item.type.toUpperCase();
  }

  openMediaItem(item: MediaItem): void {
    if (item.type === 'image') {
      this.selectedMediaItem = item;
      this.showImagePopup = true;
    }
    // Add similar logic for video and PDF popups when created
  }

  closeImagePopup(): void {
    this.showImagePopup = false;
    this.selectedMediaItem = null;
  }
}
