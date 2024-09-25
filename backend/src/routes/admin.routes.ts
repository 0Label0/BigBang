import { Router } from 'express'
import * as adminController from '../controller/admin.controller'

const r = Router()

r.get('/admin', adminController.getAdminItems)
r.get('/admin/:id', adminController.getAdminItem)
r.post('/admin', adminController.createAdminItems)
r.put('/admin/:id', adminController.updateAdminItem)
r.delete('admin/:id', adminController.deleteAdminItem)

export default r
