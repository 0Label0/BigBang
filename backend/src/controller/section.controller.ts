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
    const sectionValidate = await Section.findOne({ title: req.body.title })
    if (sectionValidate) {
      return res.status(409).json({"Message" : "Section already exist"})
    }
    const sectionsArray = req.body
    if (!Array.isArray(sectionsArray)) {
      return res.status(400).json({ message: 'Se esperaba un array de secciones' });
    }
    const sectionPromises = sectionsArray.map(async(sectionDta)=> {
      const section = new Section(sectionDta)
      return await section.save()
    })

    const savedSection = await Promise.all(sectionPromises)

    res.status(201).json({ message: 'Secciones han sido creadas con exito', sections: savedSection })

  } catch (err) {
    console.error('Error al crear la sección:', err)
    res.status(500).json({ message: 'Error interno del servidor' })
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

export const deleteAllSections: RequestHandler = async (_, res) => {
  try {
    const result = await Section.deleteMany({})
    res.status(200).json({ message: `Todas las secciones han sido eliminadas ${result}`})
  }catch (err) {
    res.status(500).json({ errorMessage: `Error del servidor al eliminar las seciones ${err}`})
  }
}
