import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})

// TODO: compresse the image for performance optimization
export class GalleryComponent {
  private imageCount: number = 2;
  imageIndex: number = 0;

  /**
   * Handles the click event on the left arrow button to navigate to the previous image.
   * If the current image is the first one, show the last image
   */
  handleLeftArrowClick() {
    if (this.imageIndex === 0) this.imageIndex = this.imageCount;
    this.imageIndex--;
  }

  /**
   * Handles the click event on the right arrow button to navigate to the next image.
   * If the current image is the last one, first the image.
   */
  handleRightArrowClick() {
    if (this.imageIndex === this.imageCount) this.imageIndex = 0;
    this.imageIndex++;
  }
}
