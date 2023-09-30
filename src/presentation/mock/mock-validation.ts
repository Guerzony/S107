import { Validation } from '../protocols'

export const mockValidationStub = () => {
  class ValidationStub implements Validation {
    validate (input: any): Error | null {
      return null
    }
  }
  return new ValidationStub()
}
