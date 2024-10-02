export interface TypeCreateDrink {
  description: boolean,
  id: string,
  onDelete: (id:string) => void
}

export interface TypeButtonBottom {
  btnName: string,
  func: () => void
}

export type TypeDrink = {
  id: string,
  description: boolean,
  sectionId: string | undefined 
}

export type TypeSection = {
  title: string,
  _id?: string
}

interface FormValues {
  sections: TypeSection[]
}