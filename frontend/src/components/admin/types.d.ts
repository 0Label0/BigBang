import type { ZodVoid } from "astro/zod"

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
  sectionId: string
}

export type TypeSection = {
  id: string,
  title: string
}

