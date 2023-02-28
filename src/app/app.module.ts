import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxDragAndDropModule } from '@elemental-concept/ngx-drag-and-drop';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    NgxDragAndDropModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
