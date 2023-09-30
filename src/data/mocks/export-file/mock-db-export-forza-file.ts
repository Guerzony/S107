import path from 'path'
import { ExportForzaFile } from '../../../domain/usecases'

export const mockDbExportForzaFileStub = (): ExportForzaFile => {
  class DbExportForzaFileStub implements ExportForzaFile {
    async export (menu: ExportForzaFile.MenuType): Promise<ExportForzaFile.ReturnType> {
      return { filePath: 'anyFilePath', folderPath: 'anyFolderPath' }
    }
  }
  return new DbExportForzaFileStub()
}

export const mockExportForzaFileReturn = (): ExportForzaFile.ReturnType => {
  const folderPath = path.join(__dirname, '../../../../public/export/anyFoder')
  const filePath = path.join(folderPath, 'anyFile.zip')
  return { filePath, folderPath }
}
