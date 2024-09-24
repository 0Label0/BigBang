import { Router } from "express";
import *  as drinkController from '../controller/drink.controller'

const r = Router()

r.get('/drinks', drinkController.getDrinks)
r.get('/drinks/:id', drinkController.getDrink)
r.post('/drinks', drinkController.createDrink)
r.put('/drinks/:id', drinkController.updateDrink)
r.delete('/drinks/:id', drinkController.deleteDrink)

export default r
