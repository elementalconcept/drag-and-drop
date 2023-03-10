import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropZoneDirective } from './directives/drop-zone.directive';

import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    DropZoneDirective,
    DragAndDropComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropZoneDirective,
    DragAndDropComponent
  ]
})
export class DragAndDropModule {
}
