import { RequestHandler } from "express";
import Section from "../model/section";

export const getSections: RequestHandler = async (req, res) => {
  try {
    const section = await Section.find()
    res.json(section)
  }catch (err) {
    res.status(500).json(err)
  }
}

export const getSection: RequestHandler = async (req, res) => {
  try {
    const sectionFind = await Section.findById(req.params.id)
    if (!sectionFind) {
      return res.status(409).json({ "Message" : "section not find" })
    }
    res.json(sectionFind)
  }catch (err) {
    res.status(500).json(err)
  }
}

export const createSections: RequestHandler = async (req, res) => {
  try {
    const sectionFound = await Section.findOne({ position: req.body.position, name: req.body.name })
    if (sectionFound) {
      return res.status(409).json({ "Message":"the section already exist" })
    }
    const createSection = new Section(req.body)
    const saveSections = await createSection.save()
    res.json(saveSections)
  }catch (err) {
    res.status(500).json(err)
  }
}

export const updateSection: RequestHandler = async (req, res) => {
  try {
    const updateSection = await Section.findByIdAndUpdate(req.params.id, req.body, { new : true })
    if (!updateSection) {
      res.status(404).json(updateSection)
    }
    res.json(updateSection)
  }catch (err) {
    res.status(500).json(err)
  }
}

export const deleteSection: RequestHandler = async (req, res) => {
  try {
    const deleteSection = await Section.findByIdAndDelete(req.params.id)
    if (!deleteSection) {
      res.status(404).json(deleteSection)
    }
    res.json(deleteSection)
  }catch(err) {
    res.status(500).json(err)
  }
}
