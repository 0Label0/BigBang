import type { UseFormRegister } from "react-hook-form"


export interface TypeCreateDrink {
  description: boolean,
  onDelete: (id:string) => void,
  index: number,
  register: UseFormRegister,
  id: string
}

export interface TypeButtonBottom {
  btnName: string,
  func: () => void
}

export type TypeDrink = {
  description: boolean,
  sectionId: string | undefined,
  id: string
}

export interface FormDrinksValues {
  drinks: TypeDrink[]
}

export type TypeSection = {
  title: string,
  _id?: string
}

export interface FormValues {
  sections: TypeSection[]
}

