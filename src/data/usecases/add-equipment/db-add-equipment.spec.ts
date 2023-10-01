import { describe, test, expect, jest } from '@jest/globals'
import { DbAddEquipment } from './db-add-equipment'
import { AddEquipmentRepository } from '../../protocols/db/equipment/add-equipment-repository'
import { mockAddEquipmentRequest, mockAddEquipmentResponse } from './../../../domain/mocks/equipment/index'

class AddEquipmentRepositoryStub implements AddEquipmentRepository {
  async addEquipment(equipment: AddEquipmentRepository.Parameter): Promise<AddEquipmentRepository.Result> {
    return mockAddEquipmentResponse()
  }
}

type SutTypes = {
  sut: DbAddEquipment
  addEquipmentRepositoryStub: AddEquipmentRepositoryStub
}

const makeSut = (): SutTypes => {
  const addEquipmentRepositoryStub = new AddEquipmentRepositoryStub()

  const sut = new DbAddEquipment(addEquipmentRepositoryStub)
  return {
    sut,
    addEquipmentRepositoryStub
  }
}

describe('Testing the DbAddEquipment class', () => {
  describe('Dependency with AddEquipmentRepository class', () => {
    test('should call the addEquipment method only once', async () => {
      const { sut, addEquipmentRepositoryStub } = makeSut()
      const addEquipmentRepositorySpy = jest.spyOn(addEquipmentRepositoryStub, 'addEquipment')
      const equipment = mockAddEquipmentRequest()
      await sut.add(equipment.body)
      expect(addEquipmentRepositorySpy).toHaveBeenCalledTimes(1)
    })
    test('should call the addEquipment method with the correct parameter', async () => {
      const { sut, addEquipmentRepositoryStub } = makeSut()
      const addEquipmentRepositorySpy = jest.spyOn(addEquipmentRepositoryStub, 'addEquipment')
      const equipment = mockAddEquipmentRequest()
      await sut.add(equipment.body)
      expect(addEquipmentRepositorySpy).toHaveBeenCalledWith(equipment.body)
    })
    test('should return a new equipment in case of success', async () => {
      const { sut } = makeSut()
      const equipment = mockAddEquipmentRequest()
      const equipmentResponse = await sut.add(equipment.body)
      expect(equipmentResponse).toEqual(mockAddEquipmentResponse())
    })
    test('should throw an exception if the addEquipment method fails', async () => {
      const { sut, addEquipmentRepositoryStub } = makeSut()
      jest.spyOn(addEquipmentRepositoryStub, 'addEquipment').mockRejectedValue(new Error())
      const equipment = mockAddEquipmentRequest()
      await expect(sut.add(equipment.body)).rejects.toThrow()
    })
  })
})
