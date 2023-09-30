import { Router } from 'express'
import { adptRoute } from '../adapters/express-route-adapter'
import { makeLoadEquipByIdController } from '../factories/controllers/load-equip-by-id/load-equip-by-id-factory'
import { makeAddEquipmentController } from '../factories/controllers/add-equipment/add-equipment-controller-factory'
import { makeUpdateEquipmentController } from '../factories/controllers/update-equipment/update-equipment-controller-factory'
import { makeDeleteEquipmentController } from '../factories/controllers/delete-equipment/delete-equipment-controller-factory'

export default (router: Router) => {
  router.get('/equipment/:id', adptRoute(makeLoadEquipByIdController()))
  router.post('/equipment', adptRoute(makeAddEquipmentController()))
  router.put('/equipment/:id', adptRoute(makeUpdateEquipmentController()))
  router.delete('/equipment/:id', adptRoute(makeDeleteEquipmentController()))
}
