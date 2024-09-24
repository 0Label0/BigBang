import {RequestHandler} from 'express'
import Drink from './drinks'

export const createDrink:RequestHandler = (req, res) => {
  const drink = new Drink(req.body)
  console.log(drink)
  res.json()
}

export const getDrinks:RequestHandler = (req, res) => {
  res.json('get drinks')
}

export const getDrink:RequestHandler = (req, res) => {
  res.json('get drink')
}

export const updateDrink:RequestHandler = (req, res) => {
  res.json('update drink')
}

export const deleteDrink: RequestHandler = (req, res) => {
  res.json('delete drink')
}
