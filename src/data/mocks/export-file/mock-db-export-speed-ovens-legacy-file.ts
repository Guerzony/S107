import { SpeedOvensLegacyMenuModel } from '../../../domain/models'
import { ExportSpeedOvensLegacyFile } from '../../../domain/usecases'

export const mockDbExportSpeedOvensLegacyFileStub = (): ExportSpeedOvensLegacyFile => {
  class DbExportSpeedOvensLegacyFileStub implements ExportSpeedOvensLegacyFile {
    async export (menu: SpeedOvensLegacyMenuModel, generation: ExportSpeedOvensLegacyFile.GenerationType): Promise<ExportSpeedOvensLegacyFile.ReturnType> {
      return { filePath: 'anyFilePath', folderPath: 'anyFolderPath' }
    }
  }
  return new DbExportSpeedOvensLegacyFileStub()
}
