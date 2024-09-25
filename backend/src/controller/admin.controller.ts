import { RequestHandler } from 'express'
import Admin from '../model/admin'

export const getAdminItems: RequestHandler = async (req, res) => {
  try {
    const admin = await Admin.find()
    res.json(admin).status(200)
  }catch (err) {
    res.json(err)
  }

}

export const getAdminItem: RequestHandler = async (req, res) => {
  try {
    const adminFind = await Admin.findById(req.params.id)
    if (!adminFind) {
      return res.status(404).json({ "Message" : "admin not find" })
    }
    res.json(adminFind)
  }catch(err) {
    res.status(500).json(err)
  }
}


export const createAdminItems: RequestHandler = async (req, res) => {
  const adminFind = await Admin.findOne({ name:req.body.name })
  if (adminFind) {
    return res.status(409).json({ message: "The Admin already exists" })
  }
  try {
    const admin = new Admin(req.body)
    const savedAdmin = await admin.save()
    res.status(201).json(savedAdmin)
  }catch (err) {
    res.status(500).json(err)
  }
}

export const deleteAdminItem: RequestHandler = async (req, res) => {
  try {
    const adminDelete = await Admin.findByIdAndDelete(req.params.id)
    if (!adminDelete) {
      return res.status(404).json(adminDelete)
    }
    res.json(adminDelete)
  }catch(err) {
    res.status(500).json(err)
  }

}

export const updateAdminItem: RequestHandler = async (req, res) => {
  try {
    const updateAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new : true })
    if(!updateAdmin) {
      return res.status(404).json(updateAdmin)
    }
    res.json(updateAdmin)
  }catch (err) {
    res.status(500).json(err)
  }

}
