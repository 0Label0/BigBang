export interface TypeCreateDrink {
  description: boolean,
  id:string,
  onDelete: (id:string) => void
}

export interface TypeButtonBottom {
  btnName: string,
  func: () => void
}

export type TypeDrink = {
  id: string,
  description: boolean,
  sectionId: number
}

export type TypeSection = {
  title: string,
  id: string
}

interface FormValues {
  sections: TypeSection[]
}