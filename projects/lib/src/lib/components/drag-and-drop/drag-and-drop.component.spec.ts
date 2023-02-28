import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { DragAndDropComponent } from './drag-and-drop.component';

import { take } from 'rxjs/operators';

import { createMockFileList, mockPDF } from '../../mocks/file.mock';

describe('DragAndDropComponent', () => {
  let component: DragAndDropComponent;
  let fixture: ComponentFixture<DragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropComponent ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.multiple).toBeTrue();
  });

  it('should handle multiple files', () => {
    const fileList = createMockFileList([ mockPDF, mockPDF ]);
    spyOn(component.fileDropped, 'emit').and.callThrough();

    component.fileBrowseHandler(fileList);

    component.fileDropped
      .pipe(take(1))
      .subscribe(list => {
        expect(component.fileDropped.emit).toHaveBeenCalled();
        expect(list.length).toEqual(fileList.length);
      });
  });

  it('should handle simple files', () => {
    const fileList = createMockFileList([ mockPDF, mockPDF ]);
    const singleFileList = createMockFileList([ mockPDF ]);
    spyOn(component.fileDropped, 'emit').and.callThrough();

    component.multiple = false;
    component.fileBrowseHandler(fileList);

    component.fileDropped
      .pipe(take(1))
      .subscribe(list => {
        expect(component.fileDropped.emit).toHaveBeenCalled();
        expect(list.length).toEqual(singleFileList.length);
      });
  });
});
