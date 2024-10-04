import { Router } from 'express'
import * as adminController from '../controller/admin.controller'

const r = Router()

r.get('api/admin', adminController.getAdminItems)
r.get('api/admin/:id', adminController.getAdminItem)
r.post('api/admin', adminController.createAdminItems)
r.put('api/admin/:id', adminController.updateAdminItem)
r.delete('api/admin/:id', adminController.deleteAdminItem)

export default r
