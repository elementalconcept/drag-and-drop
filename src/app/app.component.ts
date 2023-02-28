import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  files: string[] = [];

  onFileUpload = (files: File[]) => {
    this.files = files.map(file => file.name);
  };
}
