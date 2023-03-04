# Drag And Drop

Use this library if you need a simple `drag and drop` solution. The library will return a list of files `File[]`.

| Last version | Angular Versions       | Node | Typescript |
| ------------ | ---------------------- | ---- | ---------- |
| `1.0.1`      | 9+ up to 15 (included) | 14   | 4.6        |

## 🛠 Installation

- With **npm**: `npm i --save @elemental-concept/drag-and-drop`

Add `DragAndDropModule` to your `Module` imports section.

```typescript
import { DragAndDropModule } from '@elemental-concept/drag-and-drop';

@NgModule({
  imports: [
    DragAndDropModule
  ]
})
export class TestModule {
}
```

## 📖 Usage

- To use the drag and drop you need to add `<drag-and-drop>` into your template.
- This component accepts `multiple` as flag (by default `true`) to allow multiple files upload or single file upload.
- The file browser allow **only one** file at the time.

When files are dropped into the `dropZone` the `@Output fileDropped` will send a `File[]` object as event.

```html
<drag-and-drop (fileDropped)="onFileUpload($event)">
  <mat-icon>cloud_upload</mat-icon>
  <h4>
    Drag and drop your files
    <br>or<br>
    Click to browse your files
  </h4>
</drag-and-drop>

<div class="files-list" *ngIf="files.length > 0">
  <h4>List of file names</h4>
  <div class="file" *ngFor="let fileName of files">{{  fileName }}</div>
</div>
```

```typescript
@Component({
  selector: 'app-drag-and-drop-page',
  template: './drag-and-drop-page.component.html',
  styleUrls: ['./drag-and-drop-page.component.scss']
})
export class DragAndDropPageComponent {
  files: string[] = [];

  onFileUpload = (files: File[]) => {
    this.files = files.map(file => file.name);
  };
}
```

The component contain a hidden input and uses the `dropZone` directive in the main container.
Inside the main container there's a `<ng-content></ng-content>` to allow any kind of info presentation.

## Style

To change the css style just use css variables into your main `style.scss` file.
Here you can find the default values:

```scss
:root {
  --drag-and-drop-height: auto;
  --drag-and-drop-width: 400px;
  --drag-and-drop-padding: 12px 16px;
  --drag-and-drop-border: dashed 1px #6091dc;
  --drag-and-drop-margin: 0 auto;
  --drag-and-drop-background: #a0cee0;
}
```
