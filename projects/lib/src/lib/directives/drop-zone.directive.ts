import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[dropZone]'
})
export class DropZoneDirective {
  @HostBinding('class.fileover')
  fileOver: boolean;

  @Output()
  fileDropped = new EventEmitter();

  // Dragover listener
  @HostListener('dragover', ['$event'])
  onDragOver(event): void {
    this.preventDefaults(event);
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  onDragLeave(event): void {
    this.preventDefaults(event);
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  ondrop(event): void {
    this.preventDefaults(event);
    this.fileOver = false;

    if (event.dataTransfer === undefined) {
      return;
    }

    const files = event.dataTransfer.files;

    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

  private preventDefaults = event => {
    event.preventDefault();
    event.stopPropagation();
  };
}
