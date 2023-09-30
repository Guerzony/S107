import { ExportCMaxFile } from '../../../domain/usecases'

export const mockDbExportCMaxFileStub = (): ExportCMaxFile => {
  class DbExportCMaxFileStub implements ExportCMaxFile {
    async export (recipes: ExportCMaxFile.RecipesType): Promise<ExportCMaxFile.ReturnType> {
      return { filePath: 'anyFilePath', folderPath: 'anyFolderPath' }
    }
  }
  return new DbExportCMaxFileStub()
}
