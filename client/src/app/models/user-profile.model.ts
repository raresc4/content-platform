export interface UserProfile {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  joinDate: Date;
  role: 'admin' | 'user' | 'editor';
}

export interface UserStats {
  videosCount: number;
  imagesCount: number;
  pdfsCount: number;
  totalViews: number;
  videosChange: number; // percentage
  imagesChange: number; // percentage
  pdfsChange: number; // percentage
  viewsChange: number; // percentage
}

export interface StorageInfo {
  used: number; // in bytes
  total: number; // in bytes
  breakdown: {
    videos: number;
    images: number;
    pdfs: number;
  };
}

export interface UploadActivity {
  date: Date;
  count: number;
}

export interface RecentUpload {
  id: string;
  title: string;
  type: 'video' | 'image' | 'pdf';
  thumbnailUrl: string;
  uploadDate: Date;
  size: number;
}
