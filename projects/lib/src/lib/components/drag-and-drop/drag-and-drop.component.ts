import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: [ './drag-and-drop.component.scss' ]
})
export class DragAndDropComponent {
  @ViewChild('fileDropRef', { static: false }) fileDropEl: ElementRef<HTMLInputElement>;

  @Input() multiple = true;

  @Output() fileDropped: EventEmitter<File[]> = new EventEmitter();

  private files: File[];

  fileDroppedHandler = (files: FileList) => this.prepareFilesList(files);

  // this is an Event, but they types are not reaching the `files` section.
  fileBrowseHandler = (event: any) => this.prepareFilesList(event.target.files);

  private prepareFilesList = (files: FileList) => {
    this.files = [];

    if (this.multiple === false) {
      this.files.push(files[ 0 ]);
    } else {
      for (let i = 0; i <= files.length - 1; i++) {
        this.files.push(files[ i ]);
      }
    }

    this.fileDropped.emit(this.files);
    this.fileDropEl.nativeElement.value = '';
  };
}
