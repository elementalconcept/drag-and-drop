import { createFileFromMockFile, mockPDF } from '../mocks/file.mock';
import { DropZoneDirective } from './drop-zone.directive';

describe('DropZoneDirective', () => {
  it('should create an instance', () => {
    const directive = new DropZoneDirective();
    expect(directive).toBeTruthy();
  });

  it('should check dragover actions', () => {
    const directive = new DropZoneDirective();

    const event = new Event('dragover');
    spyOn(event, 'preventDefault').and.callThrough();
    spyOn(event, 'stopPropagation').and.callThrough();

    directive.onDragOver(event);
    expect(directive.fileOver).toBeTrue();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should check dragleave actions', () => {
    const directive = new DropZoneDirective();

    const event = new Event('dragleave');
    spyOn(event, 'preventDefault').and.callThrough();
    spyOn(event, 'stopPropagation').and.callThrough();

    directive.onDragLeave(event);
    expect(directive.fileOver).toBeFalse();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should check drop actions (1)', () => {
    const directive = new DropZoneDirective();

    const file = createFileFromMockFile(mockPDF);
    const event = {
      preventDefault: () => {},
      stopPropagation: () => {},
      dataTransfer: { files: [file, file, file] }
    };

    spyOn(event, 'preventDefault').and.callThrough();
    spyOn(event, 'stopPropagation').and.callThrough();
    spyOn(directive.fileDropped, 'emit').and.callThrough();

    directive.ondrop(event);
    expect(directive.fileDropped.emit).toHaveBeenCalledWith([file, file, file]);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should check drop actions (2)', () => {
    const directive = new DropZoneDirective();

    const event = {
      preventDefault: () => {},
      stopPropagation: () => {},
      dataTransfer: undefined
    };

    spyOn(directive.fileDropped, 'emit').and.callThrough();

    directive.ondrop(event);
    expect(directive.fileDropped.emit).not.toHaveBeenCalled();
  });

  it('should check drop actions (3)', () => {
    const directive = new DropZoneDirective();

    const event = {
      preventDefault: () => {},
      stopPropagation: () => {},
      dataTransfer: { files: [] }
    };

    spyOn(directive.fileDropped, 'emit').and.callThrough();

    directive.ondrop(event);
    expect(directive.fileDropped.emit).not.toHaveBeenCalled();
  });
});
