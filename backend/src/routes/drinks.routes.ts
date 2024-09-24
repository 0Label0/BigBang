import { Router } from "express";
import *  as drinkController from '../controller/drink.controller'

const r = Router()

r.get('/sections/drinks', drinkController.getDrinks)
r.get('/sections/drinks/:id', drinkController.getDrink)
r.post('/sections/drinks', drinkController.createDrink)
r.put('/sections/drinks/:id', drinkController.updateDrink)
r.delete('/sections/drinks/:id', drinkController.deleteDrink)

export default r
