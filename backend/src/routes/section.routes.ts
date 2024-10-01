import { Router } from "express";
import * as sectionController from '../controller/section.controller'

const r = Router()

r.get('/sections', sectionController.getSections)
r.get('/sections/:id', sectionController.getSection)
r.post('/sections', sectionController.createSections)
r.put('/sections/:id', sectionController.updateSection)
r.delete('/sections:id', sectionController.deleteSection)
r.delete('/sections', sectionController.deleteAllSections)

export default r
