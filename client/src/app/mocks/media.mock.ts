import { MediaItem } from '../models/media-item.model';
import { MOCK_IMAGES } from './media-images.mock';
import { MOCK_VIDEOS } from './media-videos.mock';
import { MOCK_PDFS } from './media-pdfs.mock';

export const MOCK_MEDIA_ITEMS: MediaItem[] = [
  ...MOCK_IMAGES,
  ...MOCK_PDFS,
  ...MOCK_VIDEOS,
];

export { MOCK_IMAGES, MOCK_VIDEOS, MOCK_PDFS };
