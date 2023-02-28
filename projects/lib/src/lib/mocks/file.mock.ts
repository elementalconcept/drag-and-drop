export interface MockFile {
  name: string;
  body: string;
  mimeType: string;
}

export const mockPDF: MockFile = {
  body: 'test',
  mimeType: 'application/pdf',
  name: 'test.pdf'
};

export const createFileFromMockFile = (file: MockFile): File => {
  const blob = new Blob([ file.body ], { type: file.mimeType }) as any;

  blob[ 'lastModifiedDate' ] = new Date();
  blob[ 'name' ] = file.name;

  return blob as File;
};

export const createMockFileList = (files: MockFile[]): FileList => {
  const fileList: FileList = {
    length: files.length,
    item(index: number): File {
      return fileList[ index ];
    }
  };

  files.forEach((file, index) => fileList[ index ] = createFileFromMockFile(file));

  return fileList;
};
