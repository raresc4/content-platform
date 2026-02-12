import { MediaItem } from '../models/media-item.model';

export const MOCK_IMAGES: MediaItem[] = [
  {
    id: '1',
    title: 'Abstract Pattern',
    type: 'image',
    uploadDate: new Date('2026-02-08'),
    size: 2.9 * 1024 * 1024,
    thumbnailUrl: 'https://picsum.photos/seed/abstract/400/300',
    downloadUrl: '#',
    dimensions: { width: 5472, height: 3648 },
  },
  {
    id: '4',
    title: 'Conference Photo',
    type: 'image',
    uploadDate: new Date('2026-02-07'),
    size: 4.7 * 1024 * 1024,
    thumbnailUrl: 'https://picsum.photos/seed/conference/400/300',
    downloadUrl: '#',
    dimensions: { width: 4896, height: 3264 },
  },
  {
    id: '6',
    title: 'Food Photography',
    type: 'image',
    uploadDate: new Date('2026-02-09'),
    size: 5.1 * 1024 * 1024,
    thumbnailUrl: 'https://picsum.photos/seed/food/400/300',
    downloadUrl: '#',
    dimensions: { width: 6000, height: 4000 },
  },
];
