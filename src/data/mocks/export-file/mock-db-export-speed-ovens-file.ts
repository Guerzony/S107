import { ExportSpeedOvensFile } from '../../../domain/usecases'

export const mockDbExportSpeedOvensFileStub = () => {
  class DbExportSpeedOvensFileStub implements ExportSpeedOvensFile {
    async export (menu: ExportSpeedOvensFile.MenuType, equipmentModel: ExportSpeedOvensFile.EquipmentModelType): Promise<ExportSpeedOvensFile.ReturnType> {
      return { filePath: 'any_file_path', folderPath: 'any_folder_path' }
    }
  }
  return new DbExportSpeedOvensFileStub()
}
