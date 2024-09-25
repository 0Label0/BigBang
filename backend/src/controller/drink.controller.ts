import { RequestHandler } from 'express'
import Drink from '../model/drink'

// Crear bebida POST
export const createDrink: RequestHandler = async (req, res) => {
  try {
    const drinkFound = await Drink.findOne({ name: req.body.name, price: req.body.price })
    if (drinkFound) {
      return res.status(409).json({ "Message" : "The drink already exist" })
    }
    const drink = new Drink(req.body)
    const savedDrink = await drink.save()
    res.json(savedDrink)
  }catch(err) {
    res.status(500).json(err)
  }
}

// Obtener todas las bebidas GET
export const getDrinks: RequestHandler = async (req, res) => {
  try {
    const drinks = await Drink.find()
    res.json(drinks)
  }catch (err) {
    res.status(500).json(err)
  }
}

// Obtener una bebida GET
export const getDrink: RequestHandler = async (req, res) => {
  try {
    const drinkFound = await Drink.findById(req.params.id)
    if(!drinkFound) {
      return res.json(drinkFound)
    }
    res.json(drinkFound)
  }catch (err) {
    res.status(500).json(err)
  }
}

// Actualizar una bebida PUT
export const updateDrink: RequestHandler = async (req, res) => {
  try {
    const drinkFound = await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if(!drinkFound) {
      return res.json(drinkFound)
    }
    res.json(drinkFound)
  }catch (err) {
    res.status(500).json(err)
  }
}

// Eliminar una bebida DELETE
export const deleteDrink: RequestHandler = async (req, res) => {
  try {
    const deleteDrink = await Drink.findByIdAndDelete(req.params.id)
    if (!deleteDrink) {
      return res.status(404).json(deleteDrink)
    }
    res.json(deleteDrink)
  }catch (err) {
    res.status(500).json(err)
  }
}
