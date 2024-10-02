import { RequestHandler } from "express"
import Section from "../model/section"

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
    const sectionProcess = await Section.findOne({title:req.body.title})
    if (sectionProcess) {
      return res.status(409).json('Sección duplicada')
    }
    const section = new Section(req.body)
    await section.save()
    res.status(200).json(section)

  } catch (error) {
    res.status(500).send({ message: `Error en el servidor: ${error}` })
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
      return res.status(404).json({ message: "Sección no encontrada" });
    }
    res.json(deleteSection)
  }catch(err) {
    res.status(500).json(err)
  }
}

// Elimina todo

export const deleteAllSections: RequestHandler = async (_, res) => {
  try {
    const result = await Section.deleteMany({})
    res.status(200).json({ message: `Todas las secciones han sido eliminadas ${result}`})
  }catch (err) {
    res.status(500).json({ errorMessage: `Error del servidor al eliminar las seciones ${err}`})
  }
}
