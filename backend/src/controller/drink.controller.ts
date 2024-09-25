import {RequestHandler} from 'express'
import Drink from '../model/drink'

export const createDrink: RequestHandler = async (req, res) => {
  try {
    const drink = new Drink(req.body)
    const savedDrink = await drink.save()
    res.json(savedDrink)
  }catch(err) {
    res.json(err)
  }
 
}

export const getDrinks: RequestHandler = (req, res) => {
  res.json('get drinks')
}

export const getDrink: RequestHandler = (req, res) => {
  res.json('get drink')
}

export const updateDrink: RequestHandler = (req, res) => {
  res.json('update drink')
}

export const deleteDrink: RequestHandler = (req, res) => {
  res.json('delete drink')
}
