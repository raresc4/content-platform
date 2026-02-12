import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPopup } from '../content-popup/content-popup';
import { MediaItem } from '../../models/media-item.model';

@Component({
  selector: 'app-image-popup',
  imports: [CommonModule, ContentPopup],
  templateUrl: './image-popup.html',
  styleUrl: './image-popup.scss',
})
export class ImagePopup {
  @Input() mediaItem: MediaItem | null = null;
  @Input() isOpen = false;
  @Output() closePopup = new EventEmitter<void>();

  onClose(): void {
    this.closePopup.emit();
  }
}
