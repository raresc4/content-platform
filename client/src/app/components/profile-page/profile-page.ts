import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Header } from '../shared/header/header';
import { ProfileService } from '../../services/profile.service';
import {
  UserProfile,
  UserStats,
  StorageInfo,
  UploadActivity,
  RecentUpload,
} from '../../models/user-profile.model';
import { ContentTab, UploadOption } from '../../models/media-item.model';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Header],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage implements OnInit, OnDestroy {
  profileService = inject(ProfileService);
  router = inject(Router);

  userProfile: UserProfile | null = null;
  userStats: UserStats | null = null;
  storageInfo: StorageInfo | null = null;
  uploadActivity: UploadActivity[] = [];
  recentUploads: RecentUpload[] = [];

  showUploadDropdown = false;
  searchQuery = '';

  private subscriptions = new Subscription();

  contentTabs: ContentTab[] = [
    { id: 'all', label: 'All Content', active: false },
    { id: 'my-uploads', label: 'My Uploads', active: true },
  ];

  uploadOptions: UploadOption[] = [
    { label: 'Upload Video', type: 'video' },
    { label: 'Upload Images', type: 'image' },
    { label: 'Upload PDF', type: 'pdf' },
  ];

  ngOnInit(): void {
    this.subscriptions.add(
      this.profileService.userProfile$.subscribe((profile) => {
        this.userProfile = profile;
      }),
    );

    this.subscriptions.add(
      this.profileService.userStats$.subscribe((stats) => {
        this.userStats = stats;
      }),
    );

    this.subscriptions.add(
      this.profileService.storageInfo$.subscribe((storage) => {
        this.storageInfo = storage;
      }),
    );

    this.subscriptions.add(
      this.profileService.uploadActivity$.subscribe((activity) => {
        this.uploadActivity = activity;
      }),
    );

    this.subscriptions.add(
      this.profileService.recentUploads$.subscribe((uploads) => {
        this.recentUploads = uploads;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setContentTab(tabId: 'all' | 'my-uploads'): void {
    this.contentTabs.forEach((tab) => (tab.active = tab.id === tabId));
    if (tabId === 'all') {
      this.router.navigate(['/dashboard']);
    }
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
    console.log('User icon clicked - already on profile page');
  }

  get storagePercentage(): number {
    return this.profileService.getStoragePercentage();
  }

  get breakdownPercentages(): {
    videos: number;
    images: number;
    pdfs: number;
  } {
    return this.profileService.getBreakdownPercentages();
  }

  formatStorageSize(bytes: number): string {
    return this.profileService.formatStorageSize(bytes);
  }

  formatNumber(num: number): string {
    return num.toLocaleString();
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

  getMaxActivityCount(): number {
    if (this.uploadActivity.length === 0) return 0;
    return Math.max(...this.uploadActivity.map((a) => a.count));
  }

  getActivityBarHeight(count: number): number {
    const max = this.getMaxActivityCount();
    return max === 0 ? 0 : (count / max) * 100;
  }

  getBadgeClass(type: string): string {
    return `badge-${type}`;
  }
}
