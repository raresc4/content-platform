import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  UserProfile,
  UserStats,
  StorageInfo,
  UploadActivity,
  RecentUpload,
} from '../models/user-profile.model';
import {
  MOCK_USER_PROFILE,
  MOCK_USER_STATS,
  MOCK_STORAGE_INFO,
  MOCK_UPLOAD_ACTIVITY,
  MOCK_RECENT_UPLOADS,
} from '../mocks/user-profile.mock';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private userProfileSubject = new BehaviorSubject<UserProfile | null>(
    MOCK_USER_PROFILE,
  );
  private userStatsSubject = new BehaviorSubject<UserStats>(MOCK_USER_STATS);
  private storageInfoSubject = new BehaviorSubject<StorageInfo>(
    MOCK_STORAGE_INFO,
  );
  private uploadActivitySubject = new BehaviorSubject<UploadActivity[]>(
    MOCK_UPLOAD_ACTIVITY,
  );
  private recentUploadsSubject = new BehaviorSubject<RecentUpload[]>(
    MOCK_RECENT_UPLOADS,
  );

  userProfile$: Observable<UserProfile | null> =
    this.userProfileSubject.asObservable();
  userStats$: Observable<UserStats> = this.userStatsSubject.asObservable();
  storageInfo$: Observable<StorageInfo> =
    this.storageInfoSubject.asObservable();
  uploadActivity$: Observable<UploadActivity[]> =
    this.uploadActivitySubject.asObservable();
  recentUploads$: Observable<RecentUpload[]> =
    this.recentUploadsSubject.asObservable();

  getUserProfile(): UserProfile | null {
    return this.userProfileSubject.value;
  }

  getUserStats(): UserStats {
    return this.userStatsSubject.value;
  }

  getStorageInfo(): StorageInfo {
    return this.storageInfoSubject.value;
  }

  getUploadActivity(): UploadActivity[] {
    return this.uploadActivitySubject.value;
  }

  getRecentUploads(): RecentUpload[] {
    return this.recentUploadsSubject.value;
  }

  updateUserProfile(profile: Partial<UserProfile>): void {
    const current = this.userProfileSubject.value;
    if (current) {
      this.userProfileSubject.next({ ...current, ...profile });
    }
  }

  // Format storage bytes to human-readable format
  formatStorageSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  // Calculate storage percentage
  getStoragePercentage(): number {
    const storage = this.storageInfoSubject.value;
    return (storage.used / storage.total) * 100;
  }

  // Get breakdown percentages
  getBreakdownPercentages(): {
    videos: number;
    images: number;
    pdfs: number;
  } {
    const storage = this.storageInfoSubject.value;
    const total = storage.used;
    return {
      videos: (storage.breakdown.videos / total) * 100,
      images: (storage.breakdown.images / total) * 100,
      pdfs: (storage.breakdown.pdfs / total) * 100,
    };
  }
}
