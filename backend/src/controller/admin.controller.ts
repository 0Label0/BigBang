import { RequestHandler } from 'express'

export const getAdminItems: RequestHandler = (req, res) => {
  res.json()
}

export const getAdminItem: RequestHandler = (req, res) => {
  res.json('hola mundo')
}

export const updateAdminItem: RequestHandler = (req, res) => {
  res.json('hola mundo')
}

export const createAdminItems: RequestHandler = (req, res) => {
  res.json('hola mundo')
}

export const deleteAdminItem: RequestHandler = (req, res) => {
  res.json('hola mundo')
}
