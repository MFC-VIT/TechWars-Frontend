import { atom } from "recoil";

export const currentPageAtom = atom({
  key: "currentPageAtom",
  default: 0
})

export const allPlanetsAtom = atom({
  key: "allPlanetsAtom",
  default: []
})
