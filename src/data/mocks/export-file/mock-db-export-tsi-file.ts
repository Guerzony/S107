import { ExportTsiFile } from '../../../domain/usecases'

export const mockDbExportTsiFileStub = () => {
  class DbExportTsiFileStub implements ExportTsiFile {
    async export (menu: ExportTsiFile.MenuType): Promise<ExportTsiFile.ReturnType> {
      return { filePath: 'any_file_path', folderPath: 'any_folder_path' }
    }
  }
  return new DbExportTsiFileStub()
}
