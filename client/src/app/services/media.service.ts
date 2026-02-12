import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaItem, MediaFilter, SortOption } from '../models/media-item.model';
import { MOCK_MEDIA_ITEMS } from '../mocks/media.mock';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private mediaItemsSubject = new BehaviorSubject<MediaItem[]>(
    MOCK_MEDIA_ITEMS,
  );
  private searchQuerySubject = new BehaviorSubject<string>('');
  private activeFilterSubject = new BehaviorSubject<MediaFilter>('all');
  private activeSortSubject = new BehaviorSubject<SortOption>('name-asc');
  private activeContentTabSubject = new BehaviorSubject<'all' | 'my-uploads'>(
    'all',
  );

  searchQuery$ = this.searchQuerySubject.asObservable();
  activeFilter$ = this.activeFilterSubject.asObservable();
  activeSort$ = this.activeSortSubject.asObservable();
  activeContentTab$ = this.activeContentTabSubject.asObservable();

  filteredAndSortedMedia$: Observable<MediaItem[]> = combineLatest([
    this.mediaItemsSubject,
    this.searchQuerySubject,
    this.activeFilterSubject,
    this.activeSortSubject,
  ]).pipe(
    map(([items, query, filter, sort]) => {
      let filteredItems = [...items];

      if (query) {
        const lowerQuery = query.toLowerCase();
        filteredItems = filteredItems.filter((item) =>
          item.title.toLowerCase().includes(lowerQuery),
        );
      }

      if (filter !== 'all') {
        const typeMap: Record<MediaFilter, string> = {
          videos: 'video',
          images: 'image',
          pdfs: 'pdf',
          all: '',
        };
        filteredItems = filteredItems.filter(
          (item) => item.type === typeMap[filter],
        );
      }

      filteredItems.sort((a, b) => {
        switch (sort) {
          case 'name-asc':
            return a.title.localeCompare(b.title);
          case 'name-desc':
            return b.title.localeCompare(a.title);
          case 'date-asc':
            return a.uploadDate.getTime() - b.uploadDate.getTime();
          case 'date-desc':
            return b.uploadDate.getTime() - a.uploadDate.getTime();
          case 'size-asc':
            return a.size - b.size;
          case 'size-desc':
            return b.size - a.size;
          default:
            return 0;
        }
      });

      return filteredItems;
    }),
  );

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  setActiveFilter(filter: MediaFilter): void {
    this.activeFilterSubject.next(filter);
  }

  setActiveSort(sort: SortOption): void {
    this.activeSortSubject.next(sort);
  }

  setActiveContentTab(tab: 'all' | 'my-uploads'): void {
    this.activeContentTabSubject.next(tab);
  }

  get searchQuery(): string {
    return this.searchQuerySubject.value;
  }

  get activeFilter(): MediaFilter {
    return this.activeFilterSubject.value;
  }

  get activeSort(): SortOption {
    return this.activeSortSubject.value;
  }

  downloadMedia(item: MediaItem): void {
    console.log('Downloading:', item.title);
    window.open(item.downloadUrl, '_blank');
  }
}
