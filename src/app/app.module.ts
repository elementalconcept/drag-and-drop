import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragAndDropModule } from '@elemental-concept/drag-and-drop';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
