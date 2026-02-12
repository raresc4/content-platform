export type MediaType = 'image' | 'video' | 'pdf';

export type MediaFilter = 'all' | 'videos' | 'images' | 'pdfs';

export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'date-asc'
  | 'date-desc'
  | 'size-asc'
  | 'size-desc';

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  uploadDate: Date;
  size: number;
  thumbnailUrl: string;
  downloadUrl: string;

  dimensions?: {
    width: number;
    height: number;
  };
  duration?: string;
  views?: number;
  pages?: number;
}

export interface ContentTab {
  id: 'all' | 'my-uploads';
  label: string;
  active: boolean;
}

export interface FilterTab {
  id: MediaFilter;
  label: string;
  icon?: string;
}

export interface UploadOption {
  label: string;
  type: MediaType;
}
