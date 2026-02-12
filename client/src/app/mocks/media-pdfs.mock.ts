import { MediaItem } from '../models/media-item.model';

export const MOCK_PDFS: MediaItem[] = [
  {
    id: '2',
    title: 'Annual Report 2025',
    type: 'pdf',
    uploadDate: new Date('2026-02-11'),
    size: 8.5 * 1024 * 1024, // 8.5 MB
    thumbnailUrl: 'https://via.placeholder.com/400x300/ff3b30/ffffff?text=PDF',
    downloadUrl: '#',
    pages: 42,
  },
  {
    id: '8',
    title: 'Marketing Strategy 2026',
    type: 'pdf',
    uploadDate: new Date('2026-02-05'),
    size: 4.1 * 1024 * 1024, // 4.1 MB
    thumbnailUrl: 'https://via.placeholder.com/400x300/ff3b30/ffffff?text=PDF',
    downloadUrl: '#',
    pages: 28,
  },
];
