import { MediaItem } from '../models/media-item.model';

export const MOCK_VIDEOS: MediaItem[] = [
  {
    id: '3',
    title: 'Behind the Scenes',
    type: 'video',
    uploadDate: new Date('2026-02-06'),
    size: 169 * 1024 * 1024,
    thumbnailUrl: 'https://picsum.photos/seed/video1/400/300',
    downloadUrl: '#',
    duration: '19:33',
    views: 9877,
  },
  {
    id: '5',
    title: 'Creative Workshop Session',
    type: 'video',
    uploadDate: new Date('2026-02-08'),
    size: 312 * 1024 * 1024,
    thumbnailUrl: 'https://picsum.photos/seed/workshop/400/300',
    downloadUrl: '#',
    duration: '28:47',
    views: 5621,
  },
  {
    id: '7',
    title: 'Getting Started Tutorial',
    type: 'video',
    uploadDate: new Date('2026-02-09'),
    size: 128 * 1024 * 1024,
    thumbnailUrl: 'https://picsum.photos/seed/tutorial/400/300',
    downloadUrl: '#',
    duration: '12:15',
    views: 8234,
  },
];
