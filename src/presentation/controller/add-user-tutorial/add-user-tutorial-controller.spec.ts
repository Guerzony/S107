/* eslint-disable no-undef */
import { Validation } from './add-user-tutorial-controller-protocols'
import { AddUserTutorialController } from './add-user-tutorial-controller'
import { badRequest, serverError } from '../../helpers/http-helper'
import { mockAddRelationTutorialsRequest, mockTutorialRelationModel } from '../../../domain/mocks/user'
import { AddUserTutorials, UserTutorialsModel } from '../../../domain/usecases/add-userTutorials'

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error | null {
      return null
    }
  }
  return new ValidationStub()
}

const makeAddUserTutorials = (): AddUserTutorials => {
  class AddUserTutorialsStub implements AddUserTutorials {
    async addUserTutorials (userRelation: UserTutorialsModel): Promise<UserTutorialsModel> {
      return new Promise(resolve => resolve(mockTutorialRelationModel()))
    }
  }
  return new AddUserTutorialsStub()
}

interface SutTypes {
  sut: AddUserTutorialController
  validationStub: Validation
  addUserTutorialsStub: AddUserTutorials
}

const makeSut = (): SutTypes => {
  const validationStub = makeValidation()
  const addUserTutorialsStub = makeAddUserTutorials()
  const sut = new AddUserTutorialController(validationStub, addUserTutorialsStub)
  return {
    sut,
    validationStub,
    addUserTutorialsStub
  }
}

describe('AddUserTutorial Controller', () => {
  test('Should call Validation with the correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub
      , 'validate')
    const httpRequest = await mockAddRelationTutorialsRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body.userTutorial)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub
      , 'validate').mockReturnValueOnce(new Error())
    const httpResponse = await sut.handle(await mockAddRelationTutorialsRequest())
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('Should return 500 addUserTutorials throws', async () => {
    const { sut, addUserTutorialsStub } = makeSut()
    jest.spyOn(addUserTutorialsStub, 'addUserTutorials').mockImplementationOnce(() => { throw new Error() })
    const httpResponse = await sut.handle(await mockAddRelationTutorialsRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
