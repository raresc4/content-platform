import {
  UserProfile,
  UserStats,
  StorageInfo,
  UploadActivity,
  RecentUpload,
} from '../models/user-profile.model';

export const MOCK_USER_PROFILE: UserProfile = {
  id: '1',
  username: 'johndoe',
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  avatarUrl: 'https://i.pravatar.cc/150?img=12',
  joinDate: new Date('2024-01-15'),
  role: 'admin',
};

export const MOCK_USER_STATS: UserStats = {
  videosCount: 45,
  imagesCount: 178,
  pdfsCount: 25,
  totalViews: 125430,
  videosChange: 12,
  imagesChange: 8,
  pdfsChange: 5,
  viewsChange: 23,
};

export const MOCK_STORAGE_INFO: StorageInfo = {
  used: 8589934592, // 8 GB
  total: 10737418240, // 10 GB
  breakdown: {
    videos: 5368709120, // 5 GB
    images: 2147483648, // 2 GB
    pdfs: 1073741824, // 1 GB
  },
};

export const MOCK_UPLOAD_ACTIVITY: UploadActivity[] = [
  { date: new Date('2025-01-01'), count: 5 },
  { date: new Date('2025-01-02'), count: 8 },
  { date: new Date('2025-01-03'), count: 3 },
  { date: new Date('2025-01-04'), count: 12 },
  { date: new Date('2025-01-05'), count: 7 },
  { date: new Date('2025-01-06'), count: 15 },
  { date: new Date('2025-01-07'), count: 9 },
  { date: new Date('2025-01-08'), count: 11 },
  { date: new Date('2025-01-09'), count: 6 },
  { date: new Date('2025-01-10'), count: 14 },
  { date: new Date('2025-01-11'), count: 4 },
  { date: new Date('2025-01-12'), count: 10 },
  { date: new Date('2025-01-13'), count: 8 },
  { date: new Date('2025-01-14'), count: 13 },
];

export const MOCK_RECENT_UPLOADS: RecentUpload[] = [
  {
    id: '1',
    title: 'Summer Vacation 2024',
    type: 'video',
    thumbnailUrl: 'https://picsum.photos/400/300?random=1',
    uploadDate: new Date('2025-02-10'),
    size: 52428800, // 50 MB
  },
  {
    id: '2',
    title: 'Project Proposal',
    type: 'pdf',
    thumbnailUrl: 'https://picsum.photos/400/300?random=2',
    uploadDate: new Date('2025-02-09'),
    size: 2097152, // 2 MB
  },
  {
    id: '3',
    title: 'Team Photo',
    type: 'image',
    thumbnailUrl: 'https://picsum.photos/400/300?random=3',
    uploadDate: new Date('2025-02-08'),
    size: 1048576, // 1 MB
  },
  {
    id: '4',
    title: 'Product Demo',
    type: 'video',
    thumbnailUrl: 'https://picsum.photos/400/300?random=4',
    uploadDate: new Date('2025-02-07'),
    size: 104857600, // 100 MB
  },
];
